import React from "react";
import {CSVToArray} from '../tools/xlsParser';
import {functionsContext} from '../services/funcContext';
//import per from '../tools/person.json';
class MySelect extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <select onChange={(event) => { this.props.onselect("x", event.target.value) }}
                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                <option value="ALL">כולם</option>
                <option value="active">פעילים</option>
                <option value="notactive">מושהים</option>
            </select>
        );
    }
}

class HeaderLine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <th order="0" onClick={(e) => { this.props.table().sortValues(this.props.identify, eval(e.target.getAttribute("order"))); e.target.setAttribute("order", Math.abs(eval(e.target.getAttribute("order")) - 1)); }}
                className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                {this.props.name}</th>
        );
    }
}

export default class WorpClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            afterTreat: [{}]
        };
    }
    static contextType = functionsContext;
    getdata(value) {
        const dic = [
            "name", "id", "address", "email", "accuntnum", "brancenum", "banknum"
        ]
        const res = CSVToArray(value, String.fromCharCode(9))
        let output = []
        for (let i in res) {
            let js = {}
            for (let v in res[i]) {
                js[dic[v % dic.length]] = res[i][v]
            }
            if (Object.keys(js).length == Object.keys(dic).length) {
                if (this.props.arrCustemores.filter((x) => x["id"] == js["id"]).length)
                    js["status"] = "duplicate"
                else
                    js["status"] = "active"
                output.push(js)
            }
        }

        console.log(output)
        this.setState({ afterTreat: output });
    }
    submit(){
        this.state.afterTreat.map((item)=>{
            this.props.update_custemores(item)
            return null;
        });
        this.context.close("חברים מאקסל")
    }
    render() {
        return <div className="xl:flex flex-row justify-between shadow-md border rounded-md">
            <div
                className="flex flex-col items-center xl:w-1/4 px-4 py-2 bg-white xl:border-l-2 border-gray-500 border-dashed rounded-l-md">
                <textarea onChange={(e) => this.getdata(e.target.value)} className="w-full h-48 border-2 border-black "
                    placeholder="נא להדביק כאן את הטבלה המועתקת מEXCEL"></textarea>

                <div className="flex-col">
                    <p className="my-2 text-xs italic font-light text-gray-500">

                    </p>
                    <div className="text-xs mb-2 text-gray-600">
                        <span className="text-gray-500">הוראות ליבוא הלקוחות</span>
                        <br />
                פשוט לבחור את כל השורות הרצויות, להעתיק ולהדביק בתיבת הטקסט
                כל עדכון של תיבת הטקסט יעדכן את הטבלה.
            </div>
                </div>

            </div>
            <div className="relative flex flex-col xl:w-3/4">
                <div className="mx-auto px-4 sm:px-8">
                    <MyTable submit={()=>this.submit()} data={this.state.afterTreat} />
                </div>

            </div>
        </div>
    }
}

class BodyLine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <td className="px-5 border-b overflow-hidden border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{this.props.value}</p>
            </td>
        );
    }
}

class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.data,
            allElements: this.props.data
        };
    }
    static getDerivedStateFromProps(props, state) {
        // Any time the current user changes,
        // Reset any parts of state that are tied to that user.
        // In this simple example, that's just the email.
        if (props.data !== state.elements) {
            return {
                elements: props.data,
                allElements: props.data
            };
        }
        return null;
    }
    filterValues(key, order) {
        if (order == "ALL") { this.setState({ elements: this.state.allElements }); return; }
        console.log(key, order)
        const myData = [].concat(this.state.allElements)
        const filterdData = myData.filter(item => item[key] == order);
        this.setState({ elements: filterdData });
    }
    sortValues(key, order) {
        const myData = [].concat(this.state.elements)
        if (order == 1)
            myData.sort(function (a, b) {
                if (a[key] < b[key])
                    return -1;
                if (a[key] > b[key])
                    return 1;
                return 0;
            }
            );
        else
            myData.sort(function (a, b) {
                if (b[key] < a[key])
                    return -1;
                if (b[key] > a[key])
                    return 1;
                return 0;
            }
            );
        this.setState({ elements: myData });
    }
    render() {
        const elements = [];
        const items = []
        for (const [index, value] of this.state.elements.entries()) {
            items.push(<RowTable target={value} />)
        }
        return <div className="py-8">
            <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                        <MySelect onselect={(k, v) => this.filterValues("status", v)} />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="block relative"><span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg className="h-4 w-4 fill-current text-gray-500" viewBox="0 0 24 24">
                        <path
                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                        </path>
                    </svg></span>
                    <input
                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        placeholder="Search" />
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="leading-normal table-fixed w-full">
                        <thead>
                            <tr>
                                <th
                                    className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    בחירה</th>
                                <HeaderLine identify="name" name="שם" table={() => this} />
                                <HeaderLine identify="id" name="מספר ח.פ." table={() => this} />
                                <HeaderLine identify="address" name="כתובת" table={() => this} />
                                <HeaderLine identify="email" name="כתובת mail" table={() => this} />
                                <HeaderLine identify="accuntnum" name="מספר חשבון" table={() => this} />
                                <HeaderLine identify="brancenum" name="מספר סניף" table={() => this} />
                                <HeaderLine identify="banknum" name="מספר בנק" table={() => this} />
                                <HeaderLine identify="status" name="קטגוריה" table={() => this} />
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
                <div className="px-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"><span
                    className="text-xs xs:text-sm text-gray-900">מציג {this.state.elements.length} חברים מתוך {this.state.allElements.length}</span>
                </div>
            </div>
            <button onClick={()=>this.props.submit()} className="items-center w-full flex flex-col">
                <a
                    className="inline-block my-4 py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
                    href="#">יבוא לקוחות</a></button>
        </div>
    }
}
class RowTable extends React.Component {
    render() {
        return <tr>
            <td className="px-5 border-b overflow-hidden border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10"><label className="inline-flex items-center mt-3">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
                    </label></div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap"></p>
                    </div>
                </div>
            </td>
            <BodyLine value={this.props.target.name} />
            <BodyLine value={this.props.target.id} />
            <BodyLine value={this.props.target.address} />
            <BodyLine value={this.props.target.email} />
            <BodyLine value={this.props.target.accuntnum} />
            <BodyLine value={this.props.target.brancenum} />
            <BodyLine value={this.props.target.banknum} />

            <td className="px-5 border-b overflow-hidden border-gray-200 bg-white text-sm"><span
                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"><span
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full" aria-hidden=""></span><span
                        className="relative">{this.props.target.status}</span></span></td>
        </tr>
    }
}