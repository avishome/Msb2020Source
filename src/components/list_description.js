import React from "react";

class ListDescription extends React.Component {
  
  render() {
    return (
      <div className="listBar z-50 tooltip-text flex justify-center p-4 px-3 py-10">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
            <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
              רשימת לקוחות
            </div>
            <div className="flex items-center bg-gray-200 rounded-md">
              <div className="pl-2">
                <svg
                  className="fill-current text-gray-500 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  ></path>
                </svg>
              </div>
              <input
                className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                id="search"
                type="text"
                placeholder="חיפוש לקוח"
              />
            </div>
            <div className="py-3 text-sm">
            {
                this.props.data.map((item)=> <div key={item[0][0]} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className={"bg-"+(((item[0][2])=="active")?"green":"red")+"-400 h-2 w-2 m-2 rounded-full"} />
              <div className="flex-grow font-medium px-2">{item[0][1]}</div>
                <div className="text-sm font-normal text-gray-500 tracking-wide">
                {item[1]}
                </div>
              </div>)
              }
              
            </div>
            <div className="block bg-gray-200 text-sm text-left py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
              <button className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4">
                עריכה
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                סגירה
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListDescription;
