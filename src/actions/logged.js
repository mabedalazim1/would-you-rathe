export const GET_LOGGED = 'GET_LOGGED'
export const RESET_LOGGED = 'RESET_LOGGED'
export const IS_LOGGED = 'IS_LOGGED'

export function getLogged (isLogged) {
  return {
    type: GET_LOGGED,
    isLogged
  }
}

export function resetLogged (logged) {
  return {
    type: RESET_LOGGED,
    logged
  }
}

export function isLogged (logged) {
  return {
    type: IS_LOGGED,
    logged
  }
}
