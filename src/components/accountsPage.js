import React from "react";
import SummrayTable from "./summray_table";
import { functionsContext } from '../services/funcContext';
import editSvg from "../placeholders/icons/zondicons/edit-pencil.svg"
import shtrodelSvg from "../placeholders/icons/zondicons/at-symbol.svg"
import printer from "../placeholders/icons/zondicons/printer.svg"
import creditcard from "../placeholders/icons/zondicons/credit-card.svg"
import documentadd from "../placeholders/icons/zondicons/document-add.svg"
import face from "../placeholders/icons/zondicons/user-solid-square.svg"
class AccountsPage extends React.Component {
  constructor(props) {
    super(props);
    let us = (props.edit > 0) ? props.edit : 12345
    this.state = {
      user: us
      , explain: <div></div>
    };
  }

  getReceiptData(startTxt,endTxt) {
    const start = Date.parse(startTxt.replaceAll(".", "/").replace(/([0-9]+)\/([0-9]+)/, '$2/$1'))
    const end = Date.parse(endTxt.replaceAll(".", "/").replace(/([0-9]+)\/([0-9]+)/, '$2/$1'))
    let userData = this.props.arrCustemores.filter((x) => x.id == this.state.user)[0]
    let predebItems = this.props.arrbilled.filter((item) => item.custemorId == this.state.user
    ).filter((item) =>
      parseFloat(item.FatherDate) < end &&
      item.isDone
    )
    let debItems = predebItems.filter((item) =>
      parseFloat(item.FatherDate) > start
    );
    let prepayItems = this.props.arrpayments.filter((item) =>
      item.custemorId == this.state.user &&
      item.seccess == true &&
      parseFloat(item.date) < end
    )
    let payItems = prepayItems.filter((item) =>
      parseFloat(item.date) > start
    )

    let debt = predebItems.reduce(function (sum, pay) {
      return sum + pay.payed;
    }, 0)
    let pay = prepayItems.filter((item) =>
      parseFloat(item.date) < start
    ).reduce(function (sum, pay) {
      return sum + pay.payed;
    }, 0);
    const sumInPriod = predebItems.filter((item) =>
      parseFloat(item.FatherDate) < start
    ).reduce(function (sum, pay) {
      return sum + pay.payed;
    }, 0) - prepayItems.filter((item) =>
      parseFloat(item.date) < start
    ).reduce(function (sum, pay) {
      return sum + pay.payed;
    }, 0);
    if (sumInPriod > 0) debItems = [{
      "FatherBillName": "יתרת חובה",
      "FatherDate": start,
      "payed": String(sumInPriod)
    }].concat(debItems);
    if (sumInPriod < 0) payItems = [{ 
      "method": "יתרת זכות", 
      "payed": Math.abs(sumInPriod), 
      "date": start 
    }].concat(payItems)
    return {
      "date": startTxt +" - " + endTxt,
      "name": userData.name,
      "address": userData.address,
      "email": userData.email,
      "phone": userData.phone,
      "total": String(debt - pay),
      "item": debItems.map(item => {
        return {
          "item_name": item.FatherBillName,
          "item_desc": new Date(parseFloat(item.FatherDate)).toLocaleDateString(),
          "item_price": String(item.payed)
        }
      }),
      "pay": payItems.map((item) => {
        return {
          "pay_type": item.method,
          "pay_sum": item.payed,
          "pay_date": new Date(parseFloat(item.date)).toLocaleDateString()
        }
      })
    }
  }

  static contextType = functionsContext;
  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  render() {
    let Table = []
    console.log(this.props)
    //const groupMsb = this.groupBy(this.props.arrbilled.filter((item) => item.custemorId == this.state.user && item.msbId > 0), "msbId")
    for (const item of this.props.arrpayments) {
      if (String(item.custemorId) !== String(this.state.user)) continue;
      let msb = this.props.msbIndex.filter((x) => x.id == item.msbId)
      msb = (msb.length) ? msb[0] : { "status": item.method, "createTime": item.date }

      Table.push({
        "transaId": (msb.id) ? msb.id : item.transaId,
        "msbTime": (msb.updateTime && msb.updateTime !== "") ? msb.updateTime : msb.createTime,
        "payed": item.payed,
        "status": (msb.status == "דווח בהצלחה" && item.seccess) ? "מאושר" : (msb.status == "ממתין לאישור") ? msb.status : (item.seccess) ? msb.status : (item.reason !== "") ? item.reason : "נכשל",
        "total": true,
        "mode": (msb.status == "דווח בהצלחה" && item.seccess) ? 1 : (msb.status == "ממתין לאישור") ? 0 : (item.seccess) ? 1 : -1
      })
    }

    const TableCharge = this.props.arrbilled.filter((item) => item.custemorId == this.state.user).map((item) => {
      //let isDebt = !item.debtTime && item.payed == 0;
      //let isDebt = item.isDone == "notactive" && item.payed == 0;
      //let debt = (isDebt && this.props.arrbilled.filter((debt) => item.paidway == debt.transaId).length) ? this.props.arrbilled.filter((debt) => item.paidway == debt.transaId)[0].payed : 0;
      //let status = (isDebt) ? "גביה נכשלה" : (item.msbId > 0) ? this.props.msbIndex.filter((msb) => msb.id == item.msbId)[0].status : "ממתין לגביה";
      //let msbTime = (item.msbId > 0) ? this.props.msbIndex.filter((msb) => msb.id == item.msbId)[0].createTime : "ממתין לגביה";
      let updateBill = this.props.arrbills.filter((x) => x.id == item.FatherBillId)[0]
      return {
        "transaId": item.transaId,
        "subject": (item.FatherBillName) ? item.FatherBillName : updateBill["subject"],
        "date": (item.FatherDate) ? item.FatherDate : updateBill["date"],
        "status": (item.isDone) ? "סופי" : "טיוטא",
        "payed": item.payed,
        "total": false,
        "msbTime": (item.FatherDate) ? item.FatherDate : updateBill["date"]
      }
    })

    Table = Table.concat(TableCharge)
    Table = Table.sort(function (a, b) { if (typeof (b.msbTime) == "string") return 1; if (typeof (a.msbTime) == "string") return -1; return b.msbTime - a.msbTime });
    /*    {"subject","date","status","payed"}
    {"date","status","payed"}
    */
    const debt = this.props.arrbilled.filter((item) => item.custemorId == this.state.user
    ).reduce(function (sum, pay) {
      return sum + pay.payed;
    }, 0)
    const pay = this.props.arrpayments.filter((item) =>
      item.custemorId == this.state.user &&
      item.seccess == true
    ).reduce(function (sum, pay) {
      return sum + pay.payed;
    }, 0);
    return (<div className="font-sans antialiased h-screen flex container mx-auto px-4 ">

      <div style={{ overflowX: 'hidden' }} className="h-screen overflow-y-scroll bg-blue-400 text-purple-lighter flex-none w-80 pb-6 hidden md:block">
        <div className="text-white mb-2 mt-3 px-4 flex justify-between">
          <div className="flex-auto">
            <h1 className="font-semibold text-xl leading-tight mb-1 truncate">דפי חשבון</h1>
            <a href="index.html">חזרה</a>
            <div className="flex items-center mb-6 mt-6">
              <div className="ml-auto hidden md:block">
                <div className="relative">
                  <input type="search" placeholder="Search" className="appearance-none border text-black border-grey rounded-lg pl-8 pr-4 py-2" />
                  <div className="absolute left-0 top-0 pl-4 pt-3">
                    <svg className="text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg className="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
              <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div>תוצאות חיפוש</div>
            <div>
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center mb-3 px-4">
            <span className="bg-green rounded-full block w-2 h-2 mr-2" />
            <span className="text-white"> <span className="text-grey text-sm"></span></span>
          </div>
        </div>
        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div>שאר הלקוחות</div>
            <button className="cursor-pointer" onClick={() => this.context.link("חבר חדש")} >
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </button>
          </div>
          {this.props.arrCustemores.map((client) => {
            return (
              <button onClick={() => this.setState({ user: client.id })} key={client.id} className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <img alt="face" src={face} />
                <span className="text-white ">
                  {client.name}
                </span>
              </button>)
          })}
        </div>
        <div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white overflow-hidden">

        <div onMouseOut={() => this.setState({ explain: null })} className="border-b flex bg-blue-200 px-6 py-2 items-center flex-none">
          <div className="flex flex-col w-2/6 justify-between">
            <h3 className="text-grey-darkest mb-1 font-extrabold">
              {this.props.arrCustemores.filter((x) => x.id == this.state.user)[0].name}</h3>
            <div className="text-grey-dark text-sm truncate">
              04-55733461 {this.props.arrCustemores.filter((x) => x.id == this.state.user)[0].email}
            </div>
          </div>
          <div className="flex flex-col w-1/6 justify-between mr-2">
            <button onClick={() => this.context.link({ "page": "חיוב חדש", "params": { "opCode": "clientNum", "clientNum": Number(this.state.user) } })} className="flex flex-col w-1/8 justify-between mr-2">

              <img alt="חיוב חדש" onMouseOver={() => this.setState({
                explain: <div className="text-grey-dark text-sm truncate">
                  הוספת חיוב חדש
                </div>
              })} src={documentadd} title="חיוב חדש"></img>


            </button>
          </div>
          <div className="flex flex-col w-1/6 justify-between mr-2">
            <button onClick={() => this.context.link({ "page": "תשלום חדש", "params": { "opCode": "clientNum", "clientNum": Number(this.state.user) } })} className="flex flex-col w-1/8 justify-between mr-2">
              <img alt="דיווח תשלום" onMouseOver={() => this.setState({
                explain: <div className="text-grey-dark text-sm truncate">
                  דיווח תשלום על תשלום שהתבצע לא בה"ק
                </div>
              })} src={creditcard} title="דיווח תשלום"></img>
            </button>
          </div>
          <button onClick={() => this.context.link({ "page": "חבר חדש", "params": this.state.user })} className="flex flex-col w-1/6 justify-between mr-2">
            <img alt="עריכת פרטים" onMouseOver={() => this.setState({
              explain: <div className="text-grey-dark text-sm truncate">
                שינוי שם, פרטי חשבון וכו
                </div>
            })} src={editSvg} title="עריכת פרטי חבר"></img>


          </button>
          <button onClick={() => this.context.createReceipt({ "data": this.getReceiptData("1/11/2020","1/12/2021") })} className="flex flex-col w-1/6 justify-between mr-2">
            <img alt="שליחת מייל" onMouseOver={() => this.setState({
              explain: <div className="text-grey-dark text-sm truncate">
                שלח פירוט חשבון למייל הלקוח
                </div>
            })} src={shtrodelSvg} title="שלח פירוט חשבון למייל" />
          </button>
          <div className="flex flex-col w-1/6 justify-between mr-2">
            <img alt="הדפסה" onMouseOver={() => this.setState({
              explain: <div className="text-grey-dark text-sm truncate">
                הדפסת פירוט חשבון
                </div>
            })} src={printer} title="הדפסת דף חשבון" />
          </div>

        </div>
        <div className="bg-blue-300 block">
          {this.state.explain}
        </div>
        <div className="border-b flex bg-gray-200 px-6 py-2 items-center flex-none">
          <div className="flex w-full">
            <div className="text-grey-dark w-1/3 text-sm truncate">
              חוב:
              {" " + (debt - pay) + " "} ש"ח
            </div>
            <div className="text-grey-dark w-1/3 text-sm truncate">
              סה"כ חיובים:
              {" " + debt
              }
              ש"ח
                </div>
            <div className="text-grey-dark w-1/3 text-sm truncate">
              סה"כ תשלומים:
              {" " + pay}
               ש"ח
                </div>
          </div>
        </div>
        {/* Chat messages */}
        <div className="px-6 py-4 flex-1 overflow-y-scroll">
          {/*this.props.arrbilled.map((billed) => JSON.stringify(billed))*/}
          {/*this.props.msbIndex.filter((msb)=>msb.id==item.msbId)[0]*/}

          <SummrayTable arrData={Table} link={(x) => this.context.link(x)} type="charges_user"></SummrayTable>

        </div>

      </div>
    </div>
    );
  }
}
export default AccountsPage;