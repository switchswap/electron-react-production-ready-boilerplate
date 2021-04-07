/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the otheres
 * through IPC.
 */
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import path from 'path';
import url from 'url';
import isDev from 'electron-is-dev';
import { IpcEvents } from '../ipc_events';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      devTools: isDev,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js")
    }
  });

  console.log(isDev ? 'Running in development' : 'Running in production');
  mainWindow.loadURL(isDev ? 'http://localhost:3000' :
    url.format({
      pathname: path.join(__dirname, '../renderer/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
  // mainWindow.setMenuBarVisibility(false);

  mainWindow.on('closed', (): void => {
    mainWindow = null;
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

/**
 * All windows have been closed, quit on anything but
 * macOS.
 */
export function onWindowsAllClosed() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
}

function setupWindowControls() {
  ipcMain.on(IpcEvents.APP_MINIMIZE, () => {
    // Minimize
    if (mainWindow) {
      mainWindow.minimize();
    }
  });

  ipcMain.on(IpcEvents.APP_EXIT, () => {
    // Exit
    if (mainWindow) {
      mainWindow.close();
    }
  });
}

export function main(): void {
  setupWindowControls();

  if (!isDev) {
    // Disable refresh in production
    app.whenReady().then(() => {
      globalShortcut.register('CommandOrControl+R', () => { });
    });
  }

  app.on('ready', createWindow);
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

// Allow only one instance of the app
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} 
else {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  });
}

main();
