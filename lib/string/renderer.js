const inputString = document.getElementById('inputString')
const outputLength = document.getElementById('outputLength')

inputString.addEventListener('input', () => {
  const text = inputString.value
  outputLength.textContent = text.length
})
