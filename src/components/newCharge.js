import React from "react";
import {functionsContext} from '../services/funcContext';
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.round(Math.random()*100000), //must create bettter select
      subject: "",
      date: new Date(Date.now()).toLocaleDateString(),
      price: "",
      notes: "",
      bannedCustemors: [],
      custemors: [],
      filtor: ""
    };
    let id = this.props.edit;
    if(typeof(id)== "object" && id && !('length' in id) && id.selected){
      const oldValue = id.selected;
      this.state["id"] = oldValue.id;
      this.state["notes"] = oldValue.notes;
      this.state["date"] = oldValue.date;
      this.state["price"] = oldValue.price;
      this.state["subject"] = oldValue.subject;
      this.state["custemors"] = JSON.parse(JSON.stringify(oldValue.custemors)).filter((item)=>!id.removes.includes(item));
      this.state["bannedCustemors"] = id.removes
    }

    if(typeof(id)=="number"){
      this.state["custemors"] = [Number(id)];
    }
  }
  static contextType = functionsContext;
  submit() {
    const s = this.state;
    this.props.update_charge({
      id: s.id,
      subject: s.subject,
      date: String(Date.parse(s.date.replaceAll(".","/").replace(/([0-9]+)\/([0-9]+)/,'$2/$1'))),
      price: Number(s.price),
      notes: s.notes
    });
    //need find stiil selected, and remove canceled.
    let forAdd = s.custemors;
    let forRemove = []
    const id = this.props.edit;
    if(typeof(id)== "object" && id && !('length' in id) && id.selected){
      forAdd = s.custemors.filter((el)=> {
        return !this.props.edit.selected.custemors.includes( el );
      } );
      forRemove = this.props.edit.selected.custemors.filter((item)=>!id.removes.includes(item)).filter( (el)=> {
        return !s.custemors.includes( el );
      } );
    }
    console.log(forAdd,forRemove)
    forRemove.map((id)=>this.props.remove_bill({"transaId":s.id+"-"+id+"*1"}));
    forAdd.map((id)=>this.props.update_bill(
      {"transaId": s.id+"-"+id+"*1", // optional for take many piceses
      "FatherBillId": s.id,
      "msbId": -1,
      "custemorId": id,
      "payed": Number(s.price), // must not effect on this feild - only on msb creat
      "isDone": false,
      "paidway": "",
      "reason": "",
      "date": ""
      }))
      return true;
  }
  changeP(key, e) {
    this.setState({ [key]: e.target.value });
  }

  select(x) {
    if (typeof (x) == "number") x = [x];
    const xAfterFilter = x.filter((num)=>!this.state.bannedCustemors.includes(num))
    if(!xAfterFilter.length) return;
    this.setState((state, props) => ({ custemors: state.custemors.concat(xAfterFilter) }))
  }
  remove(x) {
    this.setState((state, props) => ({ custemors: state.custemors.filter((item) => item != x) }))

  }
  render() {
    return (<div className="container mx-auto px-4">
      <section className="py-12 px-4">
        <h2 className="text-3xl mb-8 text-center font-heading">יצירת חיוב חדש</h2>
        <div className="w-full max-w-2xl mx-auto mb-12">
          
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input value={this.state.subject} onChange={(e) => this.changeP("subject", e)} className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="כותרת" />
              </div>
              <div className="w-1/2 px-2">
                <input value={this.state.price} onChange={(e) => this.changeP("price", e)} className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="סכום בש'ח" />
                {/*select class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
                  <option>-- Select product --</option>
                  <option>Product 1</option>
                  <option>Product 2</option>
                  <option>Product 3</option>
                </select*/}
              </div>
            </div>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input value={this.state.date} onChange={(e) => this.changeP("date", e)} className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="תאריך" />
              </div>
              <div className="w-1/2 px-2">
                <input value={this.state.notes} onChange={(e) => this.changeP("notes", e)} className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="הערות" />
              </div>
            </div>
            <div className="mb-4">
              <section className="w-full text-center mb-4">

                <input onChange={(e) => this.setState({ filtor: e.target.value })} className="w-1/3 rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" placeholder="חיפוש לקוחות" />
                <button onClick={() => this.select(this.props.arrCustemores.filter((x) => !this.state.custemors.includes(x.id) && x.name.includes(this.state.filtor)).map(x => x.id))} className="md-w-1/3 rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b pl-8 pr-6 py-2 bg-white text-sm text-white bg-indigo-500 hover:bg-indigo-600">בחירה
                    ({this.props.arrCustemores.filter((x) => x.name.includes(this.state.filtor)).length})</button>
              </section>
              <section className="w-full">
                <div className="text-center flex flex-wrap justify-around block">


                  {this.props.arrCustemores.filter((x) => this.state.custemors.includes(x.id) && x.name.includes(this.state.filtor)).map((client) =>
                    <button onClick={() => this.remove(client.id)} key={client.id} className="relative w-full xl:w-1/3 py-2 px-10 my-1 mb-0 hover:bg-blue-100 cursor-pointer border-gray-200 bg-gray-100 border-b-2 border-l-2">
                      <div className="absolute top-0 right-0 h-5 w-5"><input type="checkbox" className="form-checkbox h-5 w-5 text-red-600" defaultChecked /></div>
                      <p>{client.name}</p>
                    </button>)}
                </div>
              </section>
              <section className="w-full">
                <div className="flex flex-wrap text-center">
                  {this.props.arrCustemores.filter((x) => !this.state.custemors.includes(x.id) && x.name.includes(this.state.filtor)).map((client) =>
                    <button onClick={() => this.select(client.id)} key={client.id} className={"relative w-full xl:w-5/12 py-2 px-10 m-1 mb-0 cursor-pointer border-gray-200 border-b-2 " + (this.state["bannedCustemors"].includes(client.id)? "bg-red-100" : "hover:bg-blue-100" )}>
                      <div className="absolute top-0 right-0 h-5 w-5" />
                      <p>
                        {client.name}
                        {(this.state["bannedCustemors"].includes(client.id))?" (נשלח למסב)":null}
                      </p>
                    </button>)}

                </div>
              </section>
            </div>
            <div>
              <button onClick={() => this.submit()?this.context.close("חיוב חדש"):console.log("בעיה")} className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">יצירת חיוב</button>
            </div>
          
        </div>
        {/*div class="flex flex-col lg:flex-row lg:justify-center -mx-4">
        <div class="px-4"><img class="inline-block w-8 h-8 pr-2" src="placeholders/icons/home.svg" alt=""><span>1725
            Slough Avenue, Scranton</span></div>
        <div class="px-4"><img class="inline-block w-8 h-8 pr-2" src="placeholders/icons/mobile.svg"
            alt=""><span>555-111-555</span></div>
        <div class="px-4"> <img class="inline-block w-8 h-8 pr-2" src="placeholders/icons/message.svg"
            alt=""><span>scranton@dundermifflin.com</span></div>
      </div*/}
      </section>
    </div>
    );
  }
}