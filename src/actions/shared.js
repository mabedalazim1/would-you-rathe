import {hideLoading, showLoading } from 'react-redux-loading-bar'
import { initialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading())
		return initialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users))
			dispatch(receiveQuestions(questions))
			dispatch(hideLoading())
		})
	}
}
