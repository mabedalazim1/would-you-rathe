import { GET_LOGGED, RESET_LOGGED, IS_LOGGED } from '../actions/logged'


export default function isLogged(state ={}, action) {
	switch (action.type) {
		case GET_LOGGED:
			return {   ...state, ...action.isLogged }           
        case RESET_LOGGED:
            return {logged: false}
        case IS_LOGGED:
            return {logged: true}
		default:
			return state;
	}
}