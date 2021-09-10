export {
  fetchExams,
  fetchExam
}

function fetchExams () {
  return window
    .fetch('/api/v1/exams')
    .then((res) => res.json())
    .then((body) => body?.exams)
}

function fetchExam (id) {
  return window
    .fetch(`/api/v1/exams/${id}`)
    .then((res) => res.json())
}
