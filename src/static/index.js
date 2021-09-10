import { fetchExam, fetchExams } from './api.js';
import renderExams from './examList.js';
import renderExam from './examDetail.js';

const container = document.createElement('div')
document.body.appendChild(container)

window.addEventListener('hashchange', loadRoute)
loadRoute()

function loadRoute () {
  const url = window.location.hash.replace(/^#\//, '')
  const urlParts = url.split('/')

  if (!urlParts[0]) return listExams()
  if (urlParts[0] === 'exams') return examDetail(urlParts[1])

  return notFound()
}

async function listExams () {
  container.innerHTML = ''
  const exams = await fetchExams()
  container.appendChild(renderExams(exams))
}

async function examDetail (id) {
  container.innerHTML = ''
  const exam = await fetchExam(id)
  container.appendChild(renderExam(id, exam))
}

function notFound () {
  container.innerHTML = 'Not Found'
}
