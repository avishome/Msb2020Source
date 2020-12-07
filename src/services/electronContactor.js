const { ipcRenderer } = window.require("electron");
exports.CreateMsb = (DATA) =>  ipcRenderer.sendSync('CreateFile', DATA)
exports.CreateReceipt = (DATA) =>  {console.log(DATA);ipcRenderer.sendSync('CreateReceipt', DATA);}
