import React from "react";
import ListDescription from "./list_description";

class SummaryRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.custemore}
        </td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.payed} ש"ח</td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {parseFloat(this.props.data.debtTime)?new Date(Date.now(parseFloat(this.props.data.debtTime))).toLocaleDateString():this.props.data.debtTime}</td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.reason}</td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.status}</td>
        {(this.props.data.status == "נגבה מחדש")?
         (<td className="cursor-pointer w-1/12 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">שולם</td>)
          :(<td onClick = {()=>this.props.link({"page":"חיוב חדש","params":this.props.data.id})} className="cursor-pointer hover:bg-gray-200 w-1/12 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><button>תשלום</button></td>)
          }
      </tr>
    );
  }
}

export default SummaryRow;
