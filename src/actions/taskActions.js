import {
  GET_TASKS,
  TASKS_ERROR,
  SET_LOADING,
  ADD_TASK,
  DELETE_TASK,
  SEARCH_TASKS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
} from './types'

// Get tasks from server
export const getTasks = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/tasks')
    const data = await res.json()

    dispatch({
      type: GET_TASKS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Add task to server
export const addTask = task => async dispatch => {
  try {
    const res = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()

    dispatch({
      type: ADD_TASK,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText,
    })
    console.error(err)
  }
}

// Update task on server
export const updateTask = task => async dispatch => {
  try {
    setLoading()

    const res = await fetch(`/tasks/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    dispatch({
      type: UPDATE_TASK,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Delete task from server
export const deleteTask = id => async dispatch => {
  try {
    setLoading()

    await fetch(`/tasks/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: DELETE_TASK,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Search for tasks based on full-text
export const searchTasks = text => async dispatch => {
  try {
    setLoading()

    const res = await fetch(`/tasks?q=${text}`)
    const data = await res.json()

    dispatch({
      type: SEARCH_TASKS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Set current task
export const setCurrent = task => {
  return {
    type: SET_CURRENT,
    payload: task,
  }
}

// Clear current task
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
