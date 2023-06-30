const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 850,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  console.log(`${__dirname}`);
  win.loadFile(`${__dirname}/dist/index.html`);
  win.setAlwaysOnTop(true);
}

app.whenReady().then(() => {
  createWindow();
});
