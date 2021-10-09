import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { initialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getLogged, isLogged as loginUser } from './logged'

export function handleInitialData (looged = false) {
  return dispatch => {
    dispatch(showLoading())
    return initialData().then(({ users, questions, isLogged }) => {
      !looged ? dispatch(getLogged(isLogged)) : dispatch(loginUser(isLogged))
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}
