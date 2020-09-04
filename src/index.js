const { app, BrowserWindow, Menu, ipcMain, autoUpdater} = require('electron');



const url = require('url');
const path = require('path');

let mainWindow;





app.on('ready', () => {

  
  mainWindow = new BrowserWindow({width: 1920, height: 1080, });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'views/charge.html'),
    protocol: 'file',
    slashes: true
  }))


  const mainMenu = Menu.buildFromTemplate(templateMenu);
  
  Menu.setApplicationMenu(mainMenu);


  mainWindow.on('closed', () => {
    app.quit();
  });

});




// Menu Template
const templateMenu = [



  {
    label: 'Editar',
  submenu: [
    { role: 'undo' },
    { role: 'redo' },
    { type: 'separator' },
    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
   ]
  },
   
// { role: 'viewMenu' }
{
  label: 'View',
  submenu: [
    { role: 'reload' },
    { role: 'forcereload' },
    { role: 'toggledevtools' },
    { type: 'separator' },
    { role: 'resetzoom' },
    { role: 'zoomin' },
    { role: 'zoomout' },
    { type: 'separator' },
    { role: 'togglefullscreen' }
  ]
},
];

// if you are in Mac, just add the Name of the App
if (process.platform === 'darwin') {
  templateMenu.unshift({
    label: app.getName(),
  });
};

// Developer Tools in Development Environment
if (process.env.NODE_ENV !== 'production') {
  templateMenu.push({
    label: 'DevTools',
    submenu: [
      {
        label: 'Show/Hide Dev Tools',
        accelerator: process.platform == 'darwin' ? 'Comand+D' : 'Ctrl+D',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}
