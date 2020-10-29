
import React from "react";
export default class Settings extends React.Component {
    render() {
        return (        
        
        <div className="container mx-auto px-4 py-10">
            <section className="border-b-2 pb-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="lg:w-2/5 px-2 lg:pr-16 mb-6 lg:mb-0">
                        <h2 className="text-3xl">הגדרות</h2>
                    </div>
                </div>
            </section>
            <section className="py-8 px-4 ">
                <div className="flex flex-wrap -mx-2 border-b-2 pb-8">
                    <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/2 px-2 mb-6 ">
                            <h2 className="text-2xl">מספר מוסד</h2>
                            <h2 className="text-1xl text-gray-500">המספר המזהה של המוסד מקבל התשלומים במערכת מס"ב</h2>
                        </div>
                        <div className="w-full md:w-1/2 px-2 text-center ">
                            <input className="rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b sm:pl-8 sm:pr-8 py-4 w-3/5 bg-white sm:text-1xl placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" placeholder="מספר מוסד בן 5 ספרות" defaultValue={12345}  />
                            <h2 className="sm:inline text-1xl text-gray-500" title="$(this).next().show();$(this).prev().removeAttr('disabled');$(this).hide()">עריכה
          </h2>
                            <h2 className="hidden inline text-1xl text-gray-500" title="$(this).prev().show();$(this).prev().prev().attr('disabled','true');$(this).hide()">
                                שמירה</h2>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/2 px-2 mb-6 mt-4">
                            <h2 className="text-2xl">שם מוסד</h2>
                            <h2 className="text-1xl text-gray-500">שם המוסד שיופיע בקבלות</h2>
                        </div>
                        <div className="w-full md:w-1/2 px-2 text-center  mt-4">
                            <input className="rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b sm:pl-8 sm:pr-8 py-4 w-3/5 bg-white sm:text-1xl placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" placeholder="מספר מוסד בן 5 ספרות" disabled />
                            <h2 className="sm:inline text-1xl text-gray-500" title="$(this).next().show();$(this).prev().removeAttr('disabled');$(this).hide()">עריכה
          </h2>
                            <h2 className="hidden inline text-1xl text-gray-500" title="$(this).prev().show();$(this).prev().prev().attr('disabled','true');$(this).hide()">
                                שמירה</h2>
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/2 px-2 mb-6 mt-4">
                            <h2 className="text-2xl">מספר מוסד שולח</h2>
                            <h2 className="text-1xl text-gray-500">המוסד שמעביר את קובץ המסב</h2>
                        </div>
                        <div className="w-full md:w-1/2 px-2 text-center  mt-4">
                            <input className="rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b sm:pl-8 sm:pr-8 py-4 w-3/5 bg-white sm:text-1xl placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" placeholder="מספר מוסד בן 5 ספרות" disabled />
                            <h2 className="sm:inline text-1xl text-gray-500" title="$(this).next().show();$(this).prev().removeAttr('disabled');$(this).hide()">עריכה
          </h2>
                            <h2 className="hidden inline text-1xl text-gray-500" title="$(this).prev().show();$(this).prev().prev().attr('disabled','true');$(this).hide()">
                                שמירה</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 border-b-2 pb-8 mt-8">
                    <div className="w-full md:w-1/2 px-2 lg:pr-16 mb-6 lg:mb-0">
                        <h2 className="text-2xl">גיבוי</h2>
                        <h2 className="text-1xl text-gray-500">שמירת כל הנתונים בקובץ הניתן לשחזור בעת הצורך</h2>
                    </div>
                    <div className="w-full md:w-1/2 px-2 text-center">
                        <a className="inline-block py-4 px-8 mb-4 sm:mb-0 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">שמירת גיבוי</a>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 border-b-2 pb-8 mt-8">
                    <div className="w-full md:w-1/2 px-2 lg:pr-16 mb-6 lg:mb-0">
                        <h2 className="text-2xl">תיקיית קבצים ומידע</h2>
                        <h2 className="text-1xl text-gray-500">היכן התוכנה שומרת את כל המידע הכולל פרטי לקוחות, דפי חשבון,
          הסטוריית חיובים</h2>
                    </div>
                    <div className="w-full md:w-1/2 px-2 text-center">
                        <button className="inline-block py-4 px-8 mb-4 sm:mb-0 mr-6 text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" disabled>C:\Users\oriel\Desktop\electron-quick-start</button>
                        <h2 className="inline text-1xl text-gray-500" title="$(this).next().show();$(this).prev().removeAttr('disabled');$(this).hide()">עריכה</h2>
                        <h2 className="hidden inline text-1xl text-gray-500" title="$(this).prev().show();$(this).prev().prev().attr('disabled','true');$(this).hide()">
                            שמירה</h2>
                    </div>
                </div>
            </section>
        </div>);
    }
}