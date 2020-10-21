import React from "react";

  class AccountsPage extends React.Component {
    render() {
      return (<div className="font-sans antialiased h-screen flex container mx-auto px-4 ">
          {/* Sidebar / channel list */}
          {/*div class="bg-black text-purple-lighter flex-none w-24 p-6 hidden md:block">
              <div class="cursor-pointer mb-4">
                  <div
                      class="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                      <img src="https://pbs.twimg.com/profile_images/895274026783866881/E1G1nNb0_400x400.jpg" alt="">
                  </div>
                  <div class="text-center text-white opacity-50 text-sm">&#8984;1</div>
              </div>
              <div class="cursor-pointer mb-4">
                  <div
                      class="bg-indigo-lighter opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                      L
                  </div>
                  <div class="text-center text-white opacity-50 text-sm">&#8984;2</div>
              </div>
              <div class="cursor-pointer">
                  <div
                      class="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
                      <svg class="fill-current h-10 w-10 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                              d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                          </svg>
                  </div>
              </div>
  
  
  
          </div*/}
          <div style={{overflowX: 'hidden'}} className="h-screen overflow-y-scroll bg-blue-400 text-purple-lighter flex-none w-80 pb-6 hidden md:block">
            <div className="text-white mb-2 mt-3 px-4 flex justify-between">
              <div className="flex-auto">
                <h1 className="font-semibold text-xl leading-tight mb-1 truncate">דפי חשבון</h1>
                <a href="index.html">חזרה</a>
                <div className="flex items-center mb-6 mt-6">
                  <div className="ml-auto hidden md:block">
                    <div className="relative">
                      <input type="search" placeholder="Search" className="appearance-none border text-black border-grey rounded-lg pl-8 pr-4 py-2" />
                      <div className="absolute left-0 top-0 pl-4 pt-3">
                        <svg className="text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg className="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
                  <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mb-8">
              <div className="px-4 mb-2 text-white flex justify-between items-center">
                <div className>נצפו לאחרונה</div>
                <div>
                  <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
            </div>
            <div className="mb-8">
              <div className="px-4 mb-2 text-white flex justify-between items-center">
                <div className>שאר הלקוחות</div>
                <div className="cursor-pointer" onclick="location.href='newfriend.html';">
                  <svg className="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">Adam Wathan <span className="text-grey text-sm">(you)</span></span>
              </div>
              <div className="flex items-center mb-3 px-4">
                <span className="bg-green rounded-full block w-2 h-2 mr-2" />
                <span className="text-white ">David Hemphill</span>
              </div>
            </div>
            <div>
            </div>
          </div>
          {/* Chat content */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* Top bar */}
            <div className="border-b flex bg-blue-200 px-6 py-2 items-center flex-none">
              <div className="flex flex-col w-1/6 justify-between">
                <h3 className="text-grey-darkest mb-1 font-extrabold">
                  David Hemphill</h3>
                <div className="text-grey-dark text-sm truncate">
                  04-55733461 enams@gmail.com
                </div>
              </div>
              <div className="flex flex-col w-1/8 justify-between mr-2">
                <a href="newcharge.html?user=משה כהן" className="text-grey-darkest mb-1">
                  חיוב חדש</a>
                <div className="text-grey-dark text-sm truncate">
                  הוספת חיוב חדש
                </div>
              </div>
              <div className="flex flex-col w-1/6 justify-between mr-2">
                <a href="newcharge.html?user=משה כהן" className="text-grey-darkest mb-1">
                  דיווח תשלום</a>
                <div className="text-grey-dark text-sm truncate">
                  על תשלום שהתבצע לא בה"ק
                </div>
              </div>
              <div className="flex flex-col w-1/6 justify-between mr-2">
                <a href="newcharge.html?user=משה כהן" className="text-grey-darkest mb-1">
                  עריכת פרטי חבר</a>
                <div className="text-grey-dark text-sm truncate">
                  שינוי שם, פרטי חשבון וכו
                </div>
              </div>
              <div className="flex flex-col w-1/6 justify-between mr-2">
                <a href="newcharge.html?user=משה כהן" className="text-grey-darkest mb-1">
                  הדפסה</a>
                <div className="text-grey-dark text-sm truncate">
                  או שליחה במייל
                </div>
              </div>
            </div>
            <div className="border-b flex bg-gray-200 px-6 py-2 items-center flex-none">
              <div className="flex w-full">
                <div className="text-grey-dark w-1/3 text-sm truncate">
                  חיוב קרוב: 240 ש"ח
                </div>
                <div className="text-grey-dark w-1/3 text-sm truncate">
                  סה"כ חיובים: 20002 ש"ח
                </div>
                <div className="text-grey-dark w-1/3 text-sm truncate">
                  סה"כ תשלומים: 20002 ש"ח
                </div>
              </div>
            </div>
            {/* Chat messages */}
            <div className="px-6 py-4 flex-1 overflow-y-scroll">
              <table className="w-full ">
                <tbody>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden w-1/4  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      חיוב חודשי קבוע</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      250 ש"ח</th>
                    <th className="overflow-hidden px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ציוד לעסק</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      700 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      12/04/2020</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-blue-300 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                  <tr>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      אגרת קנאביס</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      36.70 ש"ח</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      קבלה</th>
                    <th className="overflow-hidden  px-5 py-3 border-b-2 overflow-hidden border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      עריכה</th>
                  </tr>
                </tbody>
              </table>
              {/* A message
                  <div class="flex items-start mb-4 text-sm">
                      <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg"
                          class="w-10 h-10 rounded mr-3">
                      <div class="flex-1 overflow-hidden">
                          <div>
                              <span class="font-bold block">דמי חבר</span>
                              <span class="font-bold block">260 ש"ח</span>
                              <span class="text-grey text-xs">12/05/2020</span>
                          </div>
                          <p class="text-black leading-normal">דמי חבר חודשים עלות תפעול לחודש יולי 2020</p>
                      </div>
                  </div */}
            </div>
            {/*div class="pb-6 px-4 flex-none">
                  <div class="flex rounded-lg border-2 border-grey overflow-hidden">
                      <span class="text-3xl text-grey border-r-2 border-grey p-2">
                          <svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path
                                  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                          </svg>
                      </span>
                      <input type="text" class="w-full px-4" placeholder="Message #general" />
                  </div>
              </div*/}
          </div>
        </div>
      );
    }
  }
  export default AccountsPage;