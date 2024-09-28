const { app, ipcMain } = require('electron')

module.exports = () => {
  ipcMain.handle('get-version', () => {
    return app.getVersion()
  })
}
