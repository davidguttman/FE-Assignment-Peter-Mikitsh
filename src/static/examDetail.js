import {renderTable, renderHTMLElement} from './html.js';

export default function renderExam (id, exam) {
  const div = renderHTMLElement('div', `<h1>Exam ${id}</h1>`)

  const columns = [
    { title: 'Student Name', key: 'studentId' },
    {
      title: 'Grade',
      key: 'score',
      toHTML: val => (val * 100).toFixed(1) + '%'
    },
    { title: 'Rank', key: 'rank' }
  ]

  div.appendChild(renderTable(columns, exam.results))
  return div
}
