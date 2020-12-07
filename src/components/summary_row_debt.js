import React from "react";
import ListDescription from "./list_description";

class SummaryRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="overflow-hidden w-1/6 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.custemore}
        </td>
        <td className="w-1/6 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.payed} ש"ח</td>
        <td className="w-1/6 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.reason}</td>
        <td onClick = {()=>this.props.link({"page":"תשלום חדש","params":this.props.data.id})} className="cursor-pointer hover:bg-gray-200 w-1/12 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><button>תשלום</button></td>
          
      </tr>
    );
  }
}

export default SummaryRow;
