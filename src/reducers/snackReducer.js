import { SHOW_SNACK, HIDE_SNACK } from '../actions/types'

const initialState = {
  message: '',
  displaySnack: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SHOW_SNACK:
    return {
      ...state,
      message: action.payload,
      displaySnack: true,
    }
  case HIDE_SNACK:
    return {
      ...state,
      message: '',
      displaySnack: false,
    }
  default:
    return state
  }
}
