import { RECEIVE_USERS, ADD_USER_ANSWER } from "../actions/users"

export default function users(state = {}, action) {
	switch (action.type) {
	  
		case ADD_USER_ANSWER:
      console.log("Users ADD_USER_ANSWER: ", action)
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
			}
		
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}
