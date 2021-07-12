const electorn = require('electron');

const { app, BrowserWindow } = electorn; // Access electorn overall running process

// Wait for ready
app.on('ready', () => {
    new BrowserWindow({});
});