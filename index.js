const electorn = require('electron');

const { app, BrowserWindow } = electorn; // Access electorn overall running process

// Wait for ready
app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile("index.html") // Load html file
});