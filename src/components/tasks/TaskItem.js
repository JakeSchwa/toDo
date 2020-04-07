import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  deleteTask,
  updateTask,
  setCurrent,
  clearCurrent,
} from '../../actions/taskActions'
import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const TaskItem = ({
  task,
  deleteTask,
  updateTask,
  setCurrent,
  clearCurrent,
  current,
}) => {
  const { id, completed } = task
  const [taskDescription, setTaskDescription] = useState(task.description)
  const [error, setError] = useState(false)

  const onSave = () => {
    if (taskDescription.trim() !== '') {
      const editedTask = {
        id,
        description: taskDescription,
        completed,
      }
      updateTask(editedTask)
      clearCurrent()
    } else {
      setError(true)
      setTaskDescription('')
    }
  }

  const onCancel = () => {
    setTaskDescription(task.description)
    clearCurrent()
  }

  const onDelete = () => {
    deleteTask(id)
    clearCurrent()
  }

  const onComplete = event => {
    if (event.target.checked) {
      const completedTask = {
        id,
        description: taskDescription,
        completed: true,
      }
      updateTask(completedTask)
    }
  }

  return completed === false ? (
    <div className="task-item-container">
      <ListItem button divider={true}>
        <ListItemIcon>
          <Checkbox edge="start" onChange={onComplete} />
        </ListItemIcon>
        {current === task ? (
          <>
            <TextField
              fullWidth
              value={taskDescription}
              autoFocus={true}
              error={error}
              required={true}
              onChange={event => {
                setError(false)
                setTaskDescription(event.target.value)
              }}
            />
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </>
        ) : (
          <ListItemText
            id={`task-id-${id}`}
            primary={taskDescription}
            onClick={() => setCurrent(task)}
          />
        )}
        <ListItemSecondaryAction>
          <div className="delete-icon">
            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  ) : null
}

const mapStateToProps = state => ({
  current: state.task.current,
})

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  current: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {
  deleteTask,
  updateTask,
  clearCurrent,
  setCurrent,
})(TaskItem)
