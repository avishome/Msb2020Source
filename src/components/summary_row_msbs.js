import React from "react";
import ListDescription from "./list_description";

class SummaryRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.createTime}
        </td>
        <td className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.total} ש"ח
        </td>
        <td className="overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {this.props.data.status}
        </td>
        <td className="cursor-pointer tooltip overflow-hidden w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><span className="noselect">{this.props.data.reports.length} קבלות</span>
          <ListDescription data={this.props.data.reports}></ListDescription>
        </td>
        <td className="overflow-hidden cursor-pointer hover:bg-gray-200 w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><button onClick={() => this.props.link("חיוב חדש")}>קובץ מס"ב</button></td>
        <td onClick={() => this.props.link({"page":"עדכון מסב","params":this.props.data.id})} className="overflow-hidden cursor-pointer hover:bg-gray-200 w-1/12 px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"><button >עדכון</button></td>
      </tr>
    );
  }
}

export default SummaryRow;
