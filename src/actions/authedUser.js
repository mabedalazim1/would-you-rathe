export const SET_AUTHED = 'SET_AUTHED'
export const RESET_AUTHED = 'RESET_AUTHED'

export function setAuthed(name) {
	return {
		type: SET_AUTHED,
		name,
	}
}

export function resetAuthed(id) {
	return {
		type: RESET_AUTHED,
		id,
	}
}
