import {renderTable, renderHTMLElement} from './html.js';

export default function renderExams (exams) {
  const div = renderHTMLElement('div', '<h1>All Exams</h1>')

  const columns = [
    {
      title: 'Exam ID',
      key: 'id',
      toHTML: val => `<a href='#/exams/${val}'>Exam ${val}</a>`
    },
    {title: 'Avg Exam Grade', key: 'average'},
    {title: 'Students', key: 'studentCount'}
  ]

  div.appendChild(renderTable(columns, exams))
  return div
}
