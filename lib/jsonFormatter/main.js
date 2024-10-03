const { app, BrowserWindow } = require('electron')
const path = require('path')

function createJsonWindow () {
  const w = new BrowserWindow({
    width: 800, // 初始宽度
    height: 600, // 初始高度
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  w.loadFile(path.join(__dirname, '.', 'index.html'))
  // 窗口最大化
  w.maximize()
  // 关闭窗口时，不退出应用
  // w.on('close', (event) => {
  //   if (!app.isQuiting) {
  //     event.preventDefault()
  //     w.hide() // 隐藏窗口而不是关闭
  //   }
  // })
}

module.exports = createJsonWindow
