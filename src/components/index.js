import React from "react";
import Home from './home_component'
import Settings from './settings'
import NewFriend from './newFriend'
import NewFriendByXls from './newFriendByXls'
import FriendsList from './friendsList'
import Accuonts from './accountsPage'
import Tabs from './Tabs'
import NewCharge from './newCharge'
import NewPay from './newPay'
import NewMsb from './newMsb'
import Search from './search'
import UpdateMsb from './updateMsb'
import SummrayTable from "./summray_table";
import cog from "../placeholders/icons/zondicons/cog.svg"
import { functionsContext } from '../services/funcContext';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            searchWord: "",
            pages: { "ראשי": "fff" },
        };
    }
    groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    idToCustemoreName(custemores, id) {
        const res = custemores.filter((custemor) => id == custemor["id"]);
        if (res.length) return [id, res[0]["name"], res[0]["status"]];
        return id;
    }

    connectClientsTo1Bill(bill1, billed) {
        if (bill1.length < 0) { console.log("problem - selector dont find"); ParseBill["custemors"] = []; return ParseBill; }
        const ParseBill = JSON.parse(JSON.stringify(bill1[0]));
        const relevantBill = billed.filter((bill) => bill["FatherBillId"] === ParseBill["id"]);
        const afterMsb = relevantBill.filter((item) => item.isDone != false).map((item) => item["custemorId"])
        const jsonGroup = this.groupBy(relevantBill, "custemorId"); // maybe take a many items in same item - each item new line at biiled
        let output = []
        for (const index of Object.keys(jsonGroup)) {
            output.push(Number(index));
        }
        ParseBill["custemors"] = output;

        return { "selected": ParseBill, "removes": afterMsb };
    }
    createArrDebts(billed, custemores) {
        const ParseBill = JSON.parse(JSON.stringify(billed));
        return ParseBill.filter((item) => "debtTime" in item && item.payed > 0).map((item) => {
            item["custemore"] = this.idToCustemoreName(custemores, item.custemorId)[1];
            item["status"] = (item.isDone) ? "נגבה מחדש" : (true) ? "ממתין לגביה" : "שיהיה קוד ברור"
            return item;
        });
    }
    parserBillsClients(bills, billed, custemores) {
        const ParseBill = JSON.parse(JSON.stringify(bills));
        for (var i = 0; i < ParseBill.length; i++) {
            const relevantBill = billed.filter((bill) => bill["FatherBillId"] === ParseBill[i]["id"]);
            const jsonGroup = this.groupBy(relevantBill, "custemorId"); // maybe take a many items in same item - each item new line at biiled
            let output = []
            for (const index of Object.keys(jsonGroup)) {
                const value = jsonGroup[index];
                const totalTaxes = value.length;
                output.push([this.idToCustemoreName(custemores, index), Number(totalTaxes.toFixed(2))]);
            }
            ParseBill[i]["custemors"] = output;
        }
        return ParseBill;
    }
    parserMsbIndex(msbIndex, payments, custemores) {
        const ParseMsb = JSON.parse(JSON.stringify(msbIndex));
        for (var i = 0; i < ParseMsb.length; i++) {
            const relevantBill = payments.filter((bill) => bill["msbId"] === ParseMsb[i]["id"]);
            const jsonGroup = this.groupBy(relevantBill, "custemorId");
            let output = []
            for (const index of Object.keys(jsonGroup)) {
                const value = jsonGroup[index];
                const totalTaxes = value.reduce(function (sum, pay) {
                    return sum + pay.payed;
                }, 0);
                output.push([this.idToCustemoreName(custemores, index), Number((totalTaxes * 1.0).toFixed(2))]);
            }
            ParseMsb[i]["reports"] = output;
        }
        return ParseMsb;
    }
    scrollToRef() { window.scrollTo(0, this.myRef.current.offsetTop) }
    link(linkObj) {
        if (typeof (linkObj) == "string") { linkObj = { "page": linkObj }; }
        const dic = {
            "חבר חדש": () => (linkObj.params) ? this.props.custemores.filter((item) => item.id == linkObj.params) : null,
            "חברים מאקסל": () => null,
            "הגדרות": () => null,
            "רשימת מסב": () => null,
            "רשימת לקוחות": () => null,
            "חיוב חדש": () => (linkObj.params && linkObj.params.opCode == "clientNum") ? linkObj.params.clientNum : (linkObj.params && linkObj.params.opCode == "chargeNum") ? this.connectClientsTo1Bill(this.props.bills.filter((item) => item.id == linkObj.params.chargeNum), this.props.billed) : null,
            "תשלום חדש": () => (linkObj.params && linkObj.params.opCode == "clientNum") ? linkObj.params.clientNum : (linkObj.params && linkObj.params.opCode == "chargeNum") ? this.connectClientsTo1Bill(this.props.bills.filter((item) => item.id == linkObj.params.chargeNum), this.props.billed) : null,
            "דפי חשבון": () => (linkObj.params) ? linkObj.params : null,
            "יצירת מסב": () => null,
            "עדכון מסב": () => (linkObj.params) ? { "billData": this.getReuqstPay(linkObj.params), "msbEntery": this.props.msbIndex.filter((item) => item.id == linkObj.params) } : null
        }
        let tempPages = this.state.pages;
        tempPages[linkObj.page] = dic[linkObj.page]();
        this.setState({ pages: tempPages });
        this.scrollToRef();
    }
    createDoneCharge(bills, billed){
        return billed.filter((item)=>!item.isDone).map((item)=>{
           item = JSON.parse(JSON.stringify(item));
           const Father = bills.filter(x=>x.id==item.FatherBillId)
           if(Father.length === 0) return item;
           item["FatherBillName"] = Father[0].subject;
           item["FatherDate"] = Father[0].date;
           return item;
        })
    }
    getReuqstPay(fillter = 0) {
        // fillter is MsbId for display edit
        const fillterFunc = ((payed) => { return payed.msbId == fillter });

        return this.props.payments.filter((item) => fillterFunc(item)).map((item) => {
            item["company"] = this.idToCustemoreName(this.props.custemores, item.custemorId)[1] //need valid
            return JSON.parse(JSON.stringify(item));
        });
    }
    clacRestPay() {
        let jsonGroup = this.groupBy(this.props.payments.map((item) => item), "custemorId")
        const plus = Object.keys(jsonGroup).map((index) => {
            const value = jsonGroup[index];
            const totalTaxes = value.reduce(function (sum, pay) {
                return sum + pay.payed;
            }, 0);
            return { "custemorId": index, payed: totalTaxes, "FatherBillName": "זכויות" }
        })

        jsonGroup = this.groupBy(this.props.billed.map((item) => item), "custemorId");
        const minus = Object.keys(jsonGroup).map((index) => {
            const value = jsonGroup[index];
            const totalTaxes = value.reduce(function (sum, pay) {
                return sum + pay.payed;
            }, 0);
            return { "custemorId": index, "payed": totalTaxes * -1, "FatherBillName": "חובות" }
        })
        const minusandplus = [...minus, ...plus]
        jsonGroup = this.groupBy(minusandplus,"custemorId")
        const total = Object.keys(jsonGroup).map((index) => {
            const value = jsonGroup[index];
            const totalTaxes = value.reduce(function (sum, pay) {
                return sum + pay.payed;
            }, 0);
            return { "custemorId": index, "payed": totalTaxes * -1 }
        })
        return total.map((item) => {
            item["company"] = this.idToCustemoreName(this.props.custemores, item.custemorId)[1] //need valid
            return item;
        });
    }
    debt_new_clac(bill,msb,payment,custemor) {
        const paymentsFilter = (item) => {
            if (item.seccess) return true;
            if (item.msbId <= 0) return false;
            if (!item.msbId) { console.log("msb without msb?"); return false; };
            if (msb.filter((msb) => msb.id === item.msbId)[0].status === "דווח בהצלחה") return false;
            return true;
        };
        const charges = bill;
        let jsonGroup = this.groupBy(payment.filter(paymentsFilter).map((item) => item), "custemorId");
        let jsonGroup2 = this.groupBy(charges.map((item) => item), "custemorId");
        const total = Object.keys(jsonGroup).map((index) => {
            const value = jsonGroup[index];
            const totalTaxes = value.reduce(function (sum, pay) {
                return sum + pay.payed;
            }, 0);
            return { "client": index, "count": totalTaxes }
        })
        const total2 = Object.keys(jsonGroup2).map((index) => {
            const value = jsonGroup2[index];
            const totalTaxes = value.reduce(function (sum, pay) {
                return sum + pay.payed;
            }, 0);
            return { "client": index, "count": -totalTaxes }
        })
        const jsonGroup3 = this.groupBy([].concat(total, total2), "client");
        const t = Object.keys(jsonGroup3).map((index) => {
            const value = jsonGroup3[index];
            const totalTaxes = value.reduce(function (sum, pay) {
                return sum + pay.count;
            }, 0);
            return { "client": index, "count": -totalTaxes }
        }).filter((item) => item.count > 0).map((item) => {
            item["id"] = item.client;
            item["custemore"] = item["company"] = this.idToCustemoreName(custemor, item.client)[1];
            item["payed"] = item.count;
            item["FatherBillName"] = "";
            return item;
        })
        return t;
    }
    close(page) {
        if (page == "ראשי") { console.log("לא ניתן לסגור"); return; }
        let tempPages = this.state.pages;
        delete tempPages[page];
        this.setState({ pages: tempPages });
    }
    render() {
        const dic = {

            "ראשי": (<Home arrdebts={this.debt_new_clac(this.props.billed,this.props.msbIndex,this.props.payments, this.props.custemores)} arrbills={this.parserBillsClients(this.props.bills, this.props.billed, this.props.custemores)} msbIndex={this.parserMsbIndex(this.props.msbIndex,  this.props.payments,  this.props.custemores)}></Home>),
            "חבר חדש": <NewFriend clients={this.props.custemores} update_custemores={(data) => this.props.update_custemores(data)} link={(x) => this.link(x)} close={(x) => this.close(x)}></NewFriend>,
            "חברים מאקסל": <NewFriendByXls update_custemores={(data) => this.props.update_custemores(data)} arrCustemores={this.props.custemores}></NewFriendByXls>,
            "הגדרות": <Settings></Settings>,
            "רשימת מסב": <SummrayTable arrData={this.parserMsbIndex(this.props.msbIndex, this.props.payments, this.props.custemores)} link={(x) => this.link(x)} type="msbs"></SummrayTable>,
            "רשימת לקוחות": <FriendsList arrCustemores={this.props.custemores}></FriendsList>,
            "דפי חשבון": <Accuonts arrbills={this.props.bills} msbIndex={this.props.msbIndex} arrCustemores={this.props.custemores} arrbilled={this.props.billed} arrpayments={this.props.payments}></Accuonts>,
            "חיוב חדש": <NewCharge update_charge={(data) => this.props.update_charge(data)} update_bill={(data) => this.props.update_bill(data)} remove_bill={(data) => this.props.remove_bill(data)} arrCustemores={this.props.custemores}></NewCharge>,
            "תשלום חדש": <NewPay update_payment={(data) => this.props.update_payment(data)} update_charge={(data) => this.props.update_charge(data)} update_bill={(data) => this.props.update_bill(data)} remove_bill={(data) => this.props.remove_bill(data)} arrCustemores={this.props.custemores}></NewPay>,
            "יצירת מסב": <NewMsb update_payment={(data) => this.props.update_payment(data)} arrbills={this.createDoneCharge(this.props.bills, this.props.billed)} update_msb={(data) => this.props.update_msb(data)} update_payment={(data) => this.props.update_payment(data)} update_bill={(data) => this.props.update_bill(data)} arrCustemoreBills={this.debt_new_clac(this.props.billed,this.props.msbIndex,this.props.payments, this.props.custemores)}></NewMsb>,
            "עדכון מסב": <UpdateMsb remove_payment={(data)=>this.props.remove_payment(data)} update_msb={(data) => this.props.update_msb(data)} update_payment={(data) => this.props.update_payment(data)} update_bill={(data) => this.props.update_bill(data)} arrCustemoreBills={this.getReuqstPay()}></UpdateMsb>
        }
        return (

            <div className="text-body font-body">
                <div>
                    <div className="w-full h-64" style={{ marginBottom: '-5%' }}>
                        <div className=" mx-auto">
                            <button onClick={() => this.link("הגדרות")} className="py-6 px-3 text-sm text-black font-semibold bg-gray-300 rounded-bl-full hover:bg-gray-200 cursor-pointer">
                                <img src={cog} />

                            </button>
                        </div>
                    </div>
                    <div className="container mx-auto px-3">
                        <div ref={this.myRef} className="relative flex justify-center text-gray-600">
                            <div className="searchFather md:absolute relative left-0 mb-6">

                                <input type="search" name="serch" onChange={(e) => this.setState({ searchWord: e.target.value })} placeholder="חיפוש דפי חשבון" autoComplete="off" className="search md:w-2 w-64 mx-auto bg-gray-200 h-10 px-5 pr-10 rounded-full text-md border-l-2 border-t-2 focus:outline-none" />
                                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4" onClick={() => this.link("דפי חשבון")}>
                                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                                        </path>
                                    </svg>
                                </button>
                                <Search arrCustemores={this.props.custemores} searchWord={this.state.searchWord} link={(value) => this.link(value)}></Search>

                            </div>
                        </div>
                        <functionsContext.Provider value={{ link: (x) => this.link(x), close: (x) => this.close(x), createMsb: (x) => this.props.createMsb(x), createReceipt: (x) => this.props.createReceipt(x) }}>
                            <Tabs sons={this.state.pages}
                                render={
                                    (parms) => (
                                        Object.keys(this.state.pages).map((child) =>
                                            <div label={child} key={child} className={(child !== parms.activeTab) ? "fadeOut" : "fadeIn"} >
                                                {React.cloneElement(
                                                    dic[child],
                                                    { edit: this.state.pages[child] }
                                                )

                                                }
                                            </div>)
                                    )
                                }
                            >
                            </Tabs>
                        </functionsContext.Provider>
                    </div>
                </div>


            </div>)
    }
}