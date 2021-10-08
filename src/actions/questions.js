import { saveAnswer, saveQuestion } from "../utils/api"

export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"
export const SAVE_QUESTION = "SAVE_QUESTION"
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

function saveUserAnswer({authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function saveNewQuestion({ optionOneText, optionTwoText, author }) {
  return {
    type: SAVE_QUESTION,
    author,
    optionOneText,
    optionTwoText,
  }
}

export function handleSaveQuestion(question) {
  return dispatch => {
    dispatch(saveNewQuestion(question));
    return saveQuestion(question).catch(e => {
      console.log("Error:", e);
    })
  }
}

export function handleSaveAnswer(info) {
  console.log('function handleSaveAnswer',info)
  return dispatch => {
    dispatch(saveUserAnswer(info));
    return saveAnswer(info).catch(e => {
      console.log("Error:", e)
    })
  }
}
