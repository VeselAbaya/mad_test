const electron = require('electron')
const path = require('path')

const {app, BrowserWindow, ipcMain} = electron

const blizzardRegistrationUrl = 'https://eu.battle.net/account/creation/ru/?country=RUS&firstName=&secondName=&birthDay=&birthMonth=1&birthYear=&question=0'

let mainWindow
let registrationForm

app.on('ready', () => {
    mainWindow = new BrowserWindow
    mainWindow.loadURL(`file://${__dirname}/mainWindow.html`)

    mainWindow.webContents.send('blizzard-form:fill', 'aaaaa')
})