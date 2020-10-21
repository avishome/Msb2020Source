import React from "react";
import SummaryRowCharge from "./summary_row_charge";
import SummaryRowMsbs from "./summary_row_msbs";
import SummaryRowDebts from "./summary_row_debt";
import SummaryRowChargeUser from "./summary_row_user_charge";
class SummrayTable extends React.Component {
  render() {
    return (
      <table className="leading-normal table-fixed w-full">
        <thead>
          {
            (this.props.type == 'charges') ? this.props.arrData.map((x) => <SummaryRowCharge key={x.id} data={x} link={(x) => this.props.link(x)} />) : null
          }
          {
            (this.props.type == 'msbs') ? this.props.arrData.map((x) => <SummaryRowMsbs key={x.id} data={x} link={(x) => this.props.link(x)} />) : null
          }
          {
            (this.props.type == 'debts') ? this.props.arrData.map((x) => <SummaryRowDebts key={x.transaId} data={x} link={(x) => this.props.link(x)} />) : null
          }
          {
            (this.props.type == 'charges_user') ? this.props.arrData.map((x) => <SummaryRowChargeUser key={x.transaId} data={x} link={(x) => this.props.link(x)} />) : null
          }

        </thead>
      </table>
    );
  }
}

export default SummrayTable;
