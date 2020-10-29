const { ipcRenderer } = window.require("electron");
exports.CreateMsb = (DATA) =>  ipcRenderer.sendSync('CreateFile', DATA)