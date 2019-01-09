const electron = require('electron')
const path = require('path')

const {app, BrowserWindow, ipcMain} = electron

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow
    mainWindow.loadURL(`file://${__dirname}/mainWindow.html`)
})