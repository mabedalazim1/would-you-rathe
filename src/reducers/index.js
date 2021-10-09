import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux'
import authedUser from './authedUser'
import questions from './questions'
import users from './users'
import isLogged from './logged'

export default combineReducers({
  isLogged,
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer
})
