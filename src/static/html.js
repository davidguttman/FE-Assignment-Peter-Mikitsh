export {
  renderTable,
  renderHTMLElement
}

export default function renderTable (columns, data) {
  const table = document.createElement('table')
  table.appendChild(renderHeader(columns))
  table.appendChild(renderBody(columns, data))

  return table
}

function renderHeader (columns) {
  const thead = document.createElement('thead')
  const headerRow = document.createElement('tr')
  thead.appendChild(headerRow)

  const headerCells = columns.map(col => renderHTMLElement('th', col.title))
  headerCells.forEach(cell => headerRow.appendChild(cell))
  return thead
}

function renderBody (columns, data) {
  const tbody = document.createElement('tbody')
  const rows = data.map(exam => renderExamRow(columns, exam))
  rows.forEach(row => tbody.appendChild(row))
  return tbody
}

function renderExamRow (columns, exam) {
  const row = document.createElement('tr')
  const cells = columns.map(col => {
    const html = col.toHTML ? col.toHTML(exam[col.key]) : exam[col.key]
    return renderHTMLElement('td', html)
  })
  cells.forEach(cell => row.appendChild(cell))
  return row
}

function renderHTMLElement (tag, html = '') {
  const el = document.createElement(tag)
  el.innerHTML = html
  return el
}
