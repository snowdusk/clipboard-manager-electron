// renderer.js
function timestampToDate (timestamp) {
  return new Date(timestamp).toLocaleString()
}

document.getElementById('seconds').addEventListener('input', (event) => {
  const seconds = Number(event.target.value)
  if (seconds) {
    document.getElementById('secondsResult').innerText = `可读格式: ${timestampToDate(seconds * 1000)}`
  } else {
    document.getElementById('secondsResult').innerText = ''
  }
})

document.getElementById('milliseconds').addEventListener('input', (event) => {
  const milliseconds = Number(event.target.value)
  if (milliseconds) {
    document.getElementById('millisecondsResult').innerText = `可读格式: ${timestampToDate(milliseconds)}`
  } else {
    document.getElementById('millisecondsResult').innerText = ''
  }
})

// 自动更新当前 UNIX 时间戳（秒级）
function updateCurrentTimestamp () {
  const currentTimestamp = Math.floor(Date.now() / 1000) // 获取当前时间戳（秒）
  document.getElementById('currentTimestampResult').innerText = `当前 UNIX 时间戳: ${currentTimestamp}`
}

// 复制功能
document.getElementById('currentTimestampResult').addEventListener('click', () => {
  const timestampText = document.getElementById('currentTimestampResult').innerText.replace('当前 UNIX 时间戳: ', '')
  navigator.clipboard.writeText(timestampText).then(() => {
  }).catch(err => {
    console.error('复制失败: ', err)
  })
})

// 每秒更新一次
setInterval(updateCurrentTimestamp, 1000)
updateCurrentTimestamp() // 初始化显示
