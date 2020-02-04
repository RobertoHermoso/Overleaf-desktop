const electron = require('electron')
const {app, BrowserWindow, globalShortcut} = electron

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        icon: __dirname+'/overleaf.png'
    });

    mainWindow.setMenuBarVisibility(false)
    mainWindow.setTitle('Overleaf')
    mainWindow.loadURL('https://www.overleaf.com')

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });
});