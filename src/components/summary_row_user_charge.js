import React from "react";
import ListDescription from "./list_description";

class SummaryRow extends React.Component {
  render() {
    return (
      (!this.props.data.total) ? <tr>
        <td className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.subject}
        </td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.payed} ש"ח</td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {parseFloat(this.props.data.date)?new Date((parseFloat(this.props.data.date))).toLocaleDateString():this.props.data.date} </td>
        <td className="w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"> {this.props.data.status} </td>

        <td className="cursor-pointer hover:bg-gray-200 w-1/12 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><button>עריכה</button></td>
      </tr> :
        <tr>
          <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {parseFloat(this.props.data.date)?new Date((parseFloat(this.props.data.date))).toLocaleDateString():this.props.data.date}</th>
          <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.payed} ש"ח</th>
          <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.status}</th>
          <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            קבלה</th>
          <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
            עריכה</th>
        </tr>
    );
  }
}

export default SummaryRow;
