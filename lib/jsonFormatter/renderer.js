const JSONEditor = require('jsoneditor') // 动态引入 JSONEditor
const container = document.getElementById('jsoneditor')
const options = {
  mode: 'code', // 设置默认模式为代码
  search: false, // 关闭搜索框
  modes: ['tree', 'view', 'form', 'code'] // 可用的模式
}
const editor = new JSONEditor(container, options)

document.getElementById('inputJson').addEventListener('input', (event) => {
  const inputJson = event.target.value
  try {
    const jsonData = JSON.parse(inputJson)
    editor.set(jsonData)
    // editor.expandAll(); // code模式不能展开所有字段
  } catch (error) {
    editor.set({ error: '无效的 JSON 格式' })
  }
})
