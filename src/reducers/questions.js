import { SAVE_QUESTION_ANSWER, RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
	switch (action.type) {
		case SAVE_QUESTION_ANSWER:
			const id = action.qid
			const answer = action.answer
			const authedUser = action.authedUser
			return {
				...state,
				[id]: {
					...state[id],
					[answer]: {
						...state[id][answer],
						votes: state[id][answer].votes.concat([authedUser])
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
