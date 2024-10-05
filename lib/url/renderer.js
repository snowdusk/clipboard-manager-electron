const inputUrl = document.getElementById('inputUrl')
const outputKeys = document.getElementById('outputKeys')

inputUrl.addEventListener('input', () => {
  const urlValue = inputUrl.value

  try {
    const decodedUrl = decodeURIComponent(urlValue)

    // 将解码后的URL按字母顺序提取键值对
    const urlParams = new URLSearchParams(decodedUrl.split('?')[1])
    const entries = Array.from(urlParams.entries()).sort((a, b) => a[0].localeCompare(b[0]))

    // 格式化输出
    const output = entries.map(([key, value]) => `${key}: ${value}`).join('\n')

    outputKeys.textContent = output
  } catch (error) {
    outputKeys.textContent = '解码失败：' + error.message
  }
})
