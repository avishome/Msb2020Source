import React from "react";
import SummrayTable from "./summray_table";
import { functionsContext } from '../services/funcContext';
class HomeComponent extends React.Component {
  static contextType = functionsContext;
  render() {
    return (
      <div className="container mx-auto px-4 py-1">
        <section className="p-4">
          <div className="flex flex-wrap text-center">
            <button
              onClick={() => this.context.link("חיוב חדש")}
              className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l hover:bg-blue-100 cursor-pointer"
            >
              <img
                className="mx-auto mb-3"
                src={require("../placeholders/icons/shield.svg")}
                alt="חיוב חדש"
              />
              <h3 className="text-2xl mb-3 font-heading">יצירת חיוב חדש</h3>
              <p className="text-gray-500 leading-relaxed">
                ניתן לייצר רשימה של פריטים ומחירים העתידים להגבות מהחברים בחודש
                הקרוב
              </p>
            </button>
            <button
              onClick={() => this.context.link("חבר חדש")}
              className="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 hover:bg-blue-100 cursor-pointer"
            >
              <img
                className="mx-auto mb-3"
                src={require("../placeholders/icons/cloud-tools.svg")}
                alt="לקוח חדש"
              />
              <h3 className="text-2xl mb-3 font-heading">הוספת חבר חדש</h3>
              <p className="text-gray-500 leading-relaxed">
                ניתן להכניס שם של מצטרף חדש לאגודה ולציין את פרטי הוראת הקבע שלו
                לגביה
              </p>
            </button>
          </div>
        </section>
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-4">
              <div className="h-full border rounded shadow">
                <div className="flex items-center justify-between py-3 px-4 border-b">
                  <h3 className="text-lg font-heading">חיובים</h3>
                  <button
                    onClick={() => this.context.link("יצירת מסב")}
                    className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"
                  >
                    גבייה
                  </button>
                </div>
                <div className="flex flex-col p-4">
                  <SummrayTable arrData={this.props.arrbills} link={(x) => this.context.link(x)} type="charges"></SummrayTable>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-4">
              <div className="h-full border rounded shadow">
                <div className="flex items-center justify-between py-3 px-4 border-b">
                  <h3 className="text-lg font-heading">קבצי מס"ב אחרונים</h3>
                  <button  onClick={()=>this.context.link("רשימת מסב")}
                    className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"
                  >
                    כולם
                  </button>
                </div>
                <div className="flex flex-col p-4">
                  <SummrayTable arrData={this.props.msbIndex} link={(x) => this.context.link(x)} type="msbs"></SummrayTable>

                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-4">
              <div className="h-full border rounded shadow">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <h3 className="text-lg font-heading">חובות</h3>
                  <span

                    className="py-1 px-3 text-sm text-white font-semibold bg-red-500 rounded-full hover:bg-red-600 cursor-pointer"
                  >
                    עדכון
                  </span>
                </div>
                <div className="flex flex-col p-4">
                  <SummrayTable arrData={this.props.arrdebts} link={(x) => this.context.link(x)} type="debts"></SummrayTable>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-4">
              <div className="h-full border rounded shadow">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <h3 className="text-lg font-heading">דפי חשבון</h3>
                  <button
                    onClick={() => this.context.link("רשימת לקוחות")}
                    className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"
                  >
                    רשימת לקוחות
                  </button>
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="text-3xl mb-3 font-heading font-semibold">
                    30
                  </h3>
                  <span>סה"כ חברים</span>
                  <span className="text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeComponent;
