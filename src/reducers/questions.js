import {ADD_QUESTION, ADD_ANSWER, RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
	switch (action.type) {
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			}

		case ADD_ANSWER:
			const { answer, authedUser, questionId } = action.answerInfo
			return {
				...state,
				[questionId]: {
					...state[questionId],
					[answer]: {
						...state[questionId][answer],
						votes: state[questionId][answer].votes.concat([authedUser])
					}
				}
			}
            case RECEIVE_QUESTIONS:
                return {
                    ...state,
                    ...action.questions
                }
		default:
			return state
	}
}