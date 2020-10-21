import React from "react";
import SummrayTable from "./summray_table";
import { functionsContext } from '../services/funcContext';
class AccountsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 12345
    };
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

    const groupMsb = this.groupBy(this.props.arrbilled.filter((item) => item.custemorId == this.state.user && item.msbId > 0), "msbId")
    for (const index of Object.keys(groupMsb)) {
      const value = groupMsb[index];
      let msb = this.props.msbIndex.filter((x) => x.id == index)
      msb = (msb.length) ? msb[0] : console.log(index, this.props.msbIndex)
      if (!msb) continue
      const totalTaxes = value.reduce(function (sum, pay) {
        return sum + pay.payed;
      }, 0);

      Table.push({
        "transaId": msb.id,
        "date": msb.updateTime,
        "payed": totalTaxes,
        "status": msb.status,
        "total": true
      })
    }

    const TableCharge = this.props.arrbilled.filter((item) => item.custemorId == this.state.user).map((item) => {
      //let isDebt = !item.debtTime && item.payed == 0;
      let isDebt = item.isDone == "notactive" && item.payed == 0;
      let debt = (isDebt && this.props.arrbilled.filter((debt) => item.paidway == debt.transaId).length) ? this.props.arrbilled.filter((debt) => item.paidway == debt.transaId)[0].payed : 0;
      let status = (isDebt) ? "גביה נכשלה" : (item.msbId > 0) ? this.props.msbIndex.filter((msb) => msb.id == item.msbId)[0].status : "ממתין לגביה";
      return {
        "transaId": item.transaId,
        "subject": (item.FatherBillName)?item.FatherBillName:"גביית חוב",
        "date": (item.FatherDate)?item.FatherDate:item.debtTime,
        "status": status,
        "payed": (isDebt) ? debt : item.payed,
        "total": false
      }
    })

    Table = Table.concat(TableCharge)
    /*    {"subject","date","status","payed"}
    {"date","status","payed"}
    */
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
            <div className>נצפו לאחרונה</div>
            <div>
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center mb-3 px-4">
            <span className="bg-green rounded-full block w-2 h-2 mr-2" />
            <span className="text-white">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
          </div>
        </div>
        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className>שאר הלקוחות</div>
            <div className="cursor-pointer">
              <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
            </div>
          </div>
          {this.props.arrCustemores.map((client) => {
            return (
              <button onClick={()=>this.setState({user:client.id})} key={client.id} className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">{client.name}</span>
              </button>)
          })}
        </div>
        <div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white overflow-hidden">

        <div className="border-b flex bg-blue-200 px-6 py-2 items-center flex-none">
          <div className="flex flex-col w-1/6 justify-between">
            <h3 className="text-grey-darkest mb-1 font-extrabold">
        {this.props.arrCustemores.filter((x)=>x.id==this.state.user)[0].name}</h3>
            <div className="text-grey-dark text-sm truncate">
              04-55733461 {this.props.arrCustemores.filter((x)=>x.id==this.state.user)[0].email}
                </div>
          </div>
          <button onClick={() => this.context.link({ "page": "חיוב חדש", "params": { "opCode": "clientNum", "clientNum": this.state.user } })} className="flex flex-col w-1/8 justify-between mr-2">
            <a className="text-grey-darkest mb-1">
              חיוב חדש</a>
            <div className="text-grey-dark text-sm truncate">
              הוספת חיוב חדש
                </div>
          </button>
          <div className="flex flex-col w-1/6 justify-between mr-2">
            <a href="newcharge.html?user=משה כהן" className="text-grey-darkest mb-1">
              דיווח תשלום</a>
            <div className="text-grey-dark text-sm truncate">
              על תשלום שהתבצע לא בה"ק
                </div>
          </div>
          <button onClick={() => this.context.link({ "page": "חבר חדש", "params": this.state.user })} className="flex flex-col w-1/6 justify-between mr-2">
            <a className="text-grey-darkest mb-1">
              עריכת פרטי חבר</a>
            <div className="text-grey-dark text-sm truncate">
              שינוי שם, פרטי חשבון וכו
                </div>
          </button>
          <div className="flex flex-col w-1/6 justify-between mr-2">
            <a href="newcharge.html?user=משה כהן" className="text-grey-darkest mb-1">
              הדפסה</a>
            <div className="text-grey-dark text-sm truncate">
              או שליחה במייל
                </div>
          </div>
        </div>
        <div className="border-b flex bg-gray-200 px-6 py-2 items-center flex-none">
          <div className="flex w-full">
            <div className="text-grey-dark w-1/3 text-sm truncate">
              ממתין לגביה:
              {" " + this.props.arrbilled.filter((x) => x.isDone === false && x.custemorId == this.state.user).reduce(function (sum, pay) {
              return sum + pay.payed;
            }, 0)} ש"ח
            </div>
            <div className="text-grey-dark w-1/3 text-sm truncate">
              סה"כ חיובים:
              {" " + this.props.arrbilled.filter((item) => item.custemorId == this.state.user
            ).reduce(function (sum, pay) {
              return sum + pay.payed;
            }, 0)}
              ש"ח
                </div>
            <div className="text-grey-dark w-1/3 text-sm truncate">
              סה"כ תשלומים:
              {" " + this.props.arrbilled.filter((item) =>
              item.custemorId == this.state.user &&
              item.isDone === true && item.msbId > 0 &&
              this.props.msbIndex.filter((msb) => msb.id == item.msbId)[0].updateTime != ""
            ).reduce(function (sum, pay) {
              return sum + pay.payed;
            }, 0)}
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