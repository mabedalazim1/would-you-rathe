import {hideLoading, showLoading  } from 'react-redux-loading-bar'
import { saveAnswer, saveQuestion } from '../utils/api'


export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

function addAnswer({ questionId, answer, authedUser }) {
	return {
		type: ADD_ANSWER,
		answerInfo: {
			questionId,
			answer,
			authedUser,
		}
	};
}

export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		dispatch(showLoading());

		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()))
	}
}

export function handleAddUserAnswer(questionId, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState()

		dispatch(showLoading());

		return saveAnswer({
			questionId,
			answer,
			authedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						questionId,
						answer,
						authedUser
					})
				)
			)
			.then(() => dispatch(hideLoading()))
	}
}

