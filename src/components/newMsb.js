import React from "react";
//import per from '../tools/Createbill.json';
import { functionsContext } from '../services/funcContext';
class MySelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <select value={this.props.val} onChange={(event) => { this.props.onselect("x", event.target.value) }}
        className="appearance-none h-full rounded-r border-t sm:rounded-r-none border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
        <option value="ALL">ללא קבוצות</option>
        <option value="company">בית עסק</option>
        <option value="FatherBillName">חיוב</option>
        <option value="FatherDate">תאריך חיוב</option>
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

class BodyLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <td className="px-5 border-b overflow-hidden border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{this.props.value}</p>
      </td>
    );
  }
}

export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    const defultTrue = props.arrCustemoreBills.map((item) => {
      const val = JSON.parse(JSON.stringify(item))
      val["isDone"] = "active";
      return val
    }
    )
    this.state = {
      elements: defultTrue,
      allElements: defultTrue,
      filterKey: "ALL"
    };
  }
  static contextType = functionsContext;
  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  filterValues(key, order) {
    if (order == "ALL") { this.setState({ elements: this.state.allElements }); return; }
    const myData = [].concat(this.state.allElements)
    const res = this.groupBy(myData, order)
    let output = []
    for (const index of Object.keys(res)) {
      const value = res[index];
      const totalTaxes = value.reduce(function (sum, pay) {
        return sum + pay.payed;
      }, 0);
      let modif = JSON.parse(JSON.stringify(value[0])); //deep copy
      modif.payed = Number(totalTaxes.toFixed(2));
      modif.company = value.length;
      modif.transaId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
      modif["_title"] = true;
      output.push(modif);
      output = [].concat(output, value)
    }
    //const filterdData = myData.filter(item => item[key] == order);
    this.setState({ elements: output });
  }
  sortValues(key, order) {
    const myData = [].concat(this.state.allElements)
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
    this.setState({ filterKey: "ALL" }) // restet filter
    this.setState({ elements: myData });
    this.setState({ allElements: myData }); // save sort why not?
  }
  active(id) {
    if (id == false) { console.log("try toggle item without id.."); return }
    const index = this.state.elements.findIndex(s => s.transaId == id)
    let tempElem = this.state.elements;
    if (tempElem[index]._title) { console.log("try toggle title.."); return }
    if (tempElem[index]["isDone"] == "active")
      tempElem[index]["isDone"] = "notactive";
    else
      tempElem[index]["isDone"] = "active";
    this.setState({ elements: tempElem });
    tempElem = tempElem.filter(o => !o._title); //remove titles
    this.setState({ allElements: tempElem }); // save updates

  }
  submit() {
    if (this.state.allElements.filter((item) => item.isDone == "active").length == 0) return;
    //this.props.update_bill();
    const msbId = Math.round(Math.random() * 10000000)
    const sum = this.state.allElements.filter((item) => item.isDone == "active").map((item) => {
      item = JSON.parse(JSON.stringify(item))
      item["isDone"] = true;
      item["date"] = (new Date()).getTime();
      item["msbId"] = msbId;
      return item;
    }).map((item) => (this.props.update_bill(item)) ? item : { "payed": 0 }).map((item) => item.payed).reduce((a, b) => a + b, 0);

    let msb = {
      "id": msbId,
      "total": sum,
      "createTime": (new Date()).getTime(),
      "updateTime": "",
      "status": "ממתין לאישור",
      "reason": ""
    }

    this.props.update_msb(msb);
    this.context.close("יצירת מסב");
  }
  render() {
    const items = []
    for (const [index, value] of this.state.elements.entries()) {
      items.push(<RowTable selectFilter={() => console.log("do something", this.state.filterKey)} key={value.transaId} toggelActive={() => this.active(value.transaId)} target={value} />)
    }
    return <div className="py-8 px-1">
      <div className="my-2 flex justify-between w-full sm:flex-row flex-col">
        <div className="flex flex-row mb-1 sm:mb-0">
          <div>
            <div className="relative">
              <MySelect val={this.state.filterKey} onselect={(k, v) => { this.filterValues("status", v); this.setState({ filterKey: v }) }} />
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
        <div className="flex flex-row mb-1 sm:mb-0">
          <a
            className="inline-block py-1 px-8 text-white bg-red-200 hover:bg-indigo-600 rounded shadow"
            href="#">להשאיר חוב (25)</a>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
        <div className="inline-block min-w-full shadow rounded-lg">
          <table className="leading-normal table-fixed w-full relative ">
            <thead>
              <tr>
                <th
                  className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  בחירה</th>
                <HeaderLine identify="company" name="שם" table={() => this} />
                <HeaderLine identify="payed" name="סכום לחיוב" table={() => this} />
                <HeaderLine identify="FatherBillName" name="נושא חיוב" table={() => this} />
                <HeaderLine identify="FatherDate" name="תאריך חיוב" table={() => this} />
                <HeaderLine identify="about" name="פרטים" table={() => this} />
                <HeaderLine identify="isDone" name="לגביה כעת" table={() => this} />
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
        <div className="px-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"><span
          className="text-xs xs:text-sm text-gray-900">מציג {this.state.elements.length} חיובים מתוך {this.state.allElements.length}</span>
        </div>
        <div className="flex flex-col items-center"><button
          onClick={() => this.submit()}
          className="inline-block mx-auto my-4 py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"
          href="#">יצור קובץ מס"ב</button></div>
      </div>

    </div>
  }
}
class RowTable extends React.Component {
  render() {
    return <tr className={(this.props.target._title ? 'group' : ("debtTime" in this.props.target)?"bg-red-100":"")}>
      <td className="px-5 border-b overflow-hidden border-gray-200 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10"><label className="inline-flex items-center mt-3">
            <input onChange={this.props.target._title ? () => this.props.selectFilter() : void (0)} type="checkbox" className="form-checkbox h-5 w-5 text-red-600" />
          </label></div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap"></p>
          </div>
        </div>
      </td>
      <BodyLine value={this.props.target.company} />
      <BodyLine value={this.props.target.payed} />
      <BodyLine value={(("debtTime" in this.props.target)?"חוב - ":"") +this.props.target.FatherBillName} />
      <BodyLine value={this.props.target.FatherDate} />
      <BodyLine value={this.props.target.about} />

      <td onClick={() => this.props.toggelActive()} className="px-5 cursor-pointer border-b overflow-hidden border-gray-200 text-sm"><span
        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"><span
          className={(this.props.target.isDone == "active" ? "bg-green-200 " : "bg-red-200 ") + "absolute inset-0 opacity-50 rounded-full"} aria-hidden=""></span><span
            className="relative">{this.props.target.isDone == "active" ? "מאושר" : "לא לגביה"}</span></span></td>
    </tr>
  }
}