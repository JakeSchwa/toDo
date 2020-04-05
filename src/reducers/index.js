import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import snackReducer from './snackReducer'

export default combineReducers({
  task: taskReducer,
  snack: snackReducer,
})
