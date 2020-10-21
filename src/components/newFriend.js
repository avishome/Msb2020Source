import React from "react";
import ServiceClients from "../services/ServiceFreinds"
import {functionsContext} from '../services/funcContext';
export default class NewFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "id": "",
      "name": "",
      "address": "",
      "isActive": true,
      "phone": "",
      "email": "",
      "accuntnum": "",
      "brancenum": "",
      "banknum": "",
      "status": "active"
    }
    let id = this.props.edit;
    if(id && 'length' in id && id.length)
      this.state = id[0];
    console.log(props.edit)
  }
  static contextType = functionsContext;
  changeP(key, e) {
    this.setState({ [key]: e.target.value });
  }
  render() {
    return <div>
      <div className="container mx-auto px-4">
        <div className="container mx-auto">
          <div className="flex justify-center px-6">
            {/* Row*/}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* Col*/}
              <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")' }} />
              {/* Col*/}
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                {(this.props.edit && this.props.edit.length>0)?<h3 className="pt-4 text-2xl text-center">עריכת לקוח קיים</h3>:<h3 className="pt-4 text-2xl text-center">יצירת לקוח חדש</h3>}
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">שם העסק</label>
                      <input value={this.state.name} onChange={(e)=>this.changeP("name",e)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">מספר ח.פ.</label>
                <input disabled={(this.props.edit && this.props.edit.length>0)?"disabled" : ""} value={this.state.id} onChange={(e)=>this.changeP("id",e)} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                    <input value={this.state.email} onChange={(e)=>this.changeP("email",e)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email
                    " type="email" placeholder="Email" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">כתובת</label>
                    <input  value={this.state.address} onChange={(e)=>this.changeP("address",e)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email1" type="email2" placeholder="Email" />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">מספר חשבון</label>
                      <input value={this.state.accuntnum} onChange={(e)=>this.changeP("accuntnum",e)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="text" />
                      <p className="text-xs italic text-red-500">פרטי חשבון</p>
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">מספר סניף</label>
                      <input value={this.state.brancenum} onChange={(e)=>this.changeP("brancenum",e)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="text" />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">מספר בנק</label>
                      <input value={this.state.banknum} onChange={(e)=>this.changeP("banknum",e)} className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="text" />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button onClick={() => this.props.update_custemores(this.state)?this.context.close("חבר חדש"):console.log("בעיה")} className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">יצירת לקוח</button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center"><button className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" onClick={() => this.context.link("חברים מאקסל")}>אפשר להעביר מספר לקוחות דרך excel</button></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}