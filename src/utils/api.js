import {
  _getIsLogged,
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function initialData () {
  return Promise.all([_getIsLogged(), _getUsers(), _getQuestions()]).then(
    ([isLogged, users, questions]) => ({
      isLogged,
      users,
      questions
    })
  )
}

export function saveAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}
