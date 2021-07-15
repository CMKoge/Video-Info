const electorn = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electorn; // Access electorn overall running process

// Wait for ready
app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, // Enable default false nodeIntegration wich allows electron on HTMl
            contextIsolation: false,
        }
    });
    mainWindow.loadFile("index.html") // Load html file
});


// Listen to the data send by event videoSubmit  
ipcMain.on('videoSubmit', (e, path) => {
    ffmpeg.ffprobe(path, (error, metadata) => {
        console.log(metadata.format.duration);
    });
});