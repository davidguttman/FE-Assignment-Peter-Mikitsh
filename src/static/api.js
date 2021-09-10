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
    .then((body) => {
      body.results = body.results
        .sort((a, b) => b.score - a.score)
        .map((item, i) => {
          item.rank = i + 1
          return item
        })

      return body
    })
}
