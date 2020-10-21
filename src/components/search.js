import React from "react";
export default class Search extends React.Component {
    render() {
        const fillrerd = this.props.arrCustemores.filter((item)=>item.name.includes(this.props.searchWord));
        return ( <div className="listBar w-64 z-50 tooltip-text flex justify-center p-2 px-3">

        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg px-3 mb-4">
            <div className="py-3 text-sm overflow-y-auto max-h-screen">
                {fillrerd.map((item)=><button key={item.id} onClick={()=>this.props.link("דפי חשבון")} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                    <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                    <div className="flex-grow font-medium px-2">{item.name}</div>
                    </button>)}
                {fillrerd.length === 0?<button key={0} onClick={()=>this.props.link("דפי חשבון")} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                    <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                    <div className="flex-grow font-medium px-2">אין תוצאות</div>
                    </button>:null}
            </div>
          </div>
        </div>
      </div>
       )
    }
}