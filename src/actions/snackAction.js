import { SHOW_SNACK, HIDE_SNACK } from './types'

export const showSnack = message => async dispatch => {
  dispatch({
    type: SHOW_SNACK,
    payload: message,
  })
}

export const hideSnack = () => async dispatch => {
  dispatch({
    type: HIDE_SNACK,
    payload: '',
  })
}
