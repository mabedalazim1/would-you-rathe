import {ADD_ANSWER,  ADD_QUESTION } from '../actions/questions'
import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users,
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])
				}
			}
		case ADD_ANSWER:
			const { answer, authedUser, questionId } = action.answerInfo;

			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[questionId]: answer
					}
				}
			};

		default:
			return state;
	}
}