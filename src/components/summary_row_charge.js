import React from "react";
import ListDescription from "./list_description";

class SummaryRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.subject}
        </td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.price} ש"ח</td>
        <td className="cursor-pointer tooltip overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><span className="noselect">{this.props.data.custemors.length} לקוחות</span>
          <ListDescription data={this.props.data.custemors}></ListDescription>
        </td>
        <td onClick = {()=>this.props.link({"page":"חיוב חדש","params":{"opCode":"chargeNum","chargeNum":this.props.data.id}})} className="cursor-pointer hover:bg-gray-200 w-1/12 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><button>עריכה</button></td>
      </tr>
    );
  }
}

export default SummaryRow;
