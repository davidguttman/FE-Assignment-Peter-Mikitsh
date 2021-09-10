import { fetchExam, fetchExams } from './api.js';

const exams = await fetchExams()

document.body.appendChild(renderExams(exams))

function renderExams (exams) {
  const columns = [
    {
      title: 'Exam ID',
      key: 'id',
      toHTML: val => `<a href='#/exams/${val}'>Exam ${val}</a>`
    },
    {title: 'Avg Exam Grade', key: 'average'},
    {title: 'Students', key: 'studentCount'}
  ]

  const table = document.createElement('table')
  table.appendChild(renderExamsHeader(columns))
  table.appendChild(renderExamsBody(columns, exams))

  return table
}

function renderExamsHeader (columns) {
  const thead = document.createElement('thead')
  const headerRow = document.createElement('tr')
  thead.appendChild(headerRow)

  const headerCells = columns.map(col => createHTMLElement('th', col.title))
  headerCells.forEach(cell => headerRow.appendChild(cell))
  return thead
}

function renderExamsBody (columns, exams) {
  const tbody = document.createElement('tbody')
  const rows = exams.map(exam => renderExamRow(columns, exam))
  rows.forEach(row => tbody.appendChild(row))
  return tbody
}

function renderExamRow (columns, exam) {
  const row = document.createElement('tr')
  const cells = columns.map(col => {
    const html = col.toHTML ? col.toHTML(exam[col.key]) : exam[col.key]
    return createHTMLElement('td', html)
  })
  cells.forEach(cell => row.appendChild(cell))
  return row
}

function createHTMLElement (tag, html) {
  const el = document.createElement(tag)
  el.innerHTML = html
  return el
}
