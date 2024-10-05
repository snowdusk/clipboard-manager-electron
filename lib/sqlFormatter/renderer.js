const sqlFormatter = require('sql-formatter')

document.getElementById('inputSql').addEventListener('input', (event) => {
  const inputSql = event.target.value
  const formattedSql = sqlFormatter.format(inputSql)
  document.getElementById('formattedSql').textContent = formattedSql
})
