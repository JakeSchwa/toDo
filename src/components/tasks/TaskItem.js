import React, { useState, useEffect, useRef } from 'react'
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
  const [isSaveDisabled, setIsSaveDisabled] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (current !== task) {
      if (!isSaving) setTaskDescription(task.description)
      else setIsSaving(false)
      setIsSaveDisabled(false)
    }
    // eslint-disable-next-line
  }, [current])

  const onSave = () => {
    const description = taskDescription.trim()
    if (description !== '') {
      setIsSaving(true)
      if (description !== task.description) {
        const editedTask = {
          id,
          description,
          completed,
        }
        updateTask(editedTask)
      }
      clearCurrent()
    } else {
      setIsSaveDisabled(true)
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

  const onTextFieldChange = event => {
    const text = event.target.value.trim()
    if (text !== '') {
      setIsSaveDisabled(false)
    } else if (text === '') {
      setIsSaveDisabled(true)
    }
    setTaskDescription(event.target.value)
  }

  const onTextFieldBlur = () => {
    if (isSaveDisabled) {
      inputRef.current.focus()
    }
  }

  return completed === false ? (
    <div className="task-item-container">
      <ListItem divider={true}>
        <ListItemIcon>
          <Checkbox edge="start" onChange={onComplete} />
        </ListItemIcon>
        {current === task ? (
          <>
            <TextField
              inputRef={inputRef}
              fullWidth={true}
              value={taskDescription}
              autoFocus={true}
              required={true}
              onChange={onTextFieldChange}
              onBlur={onTextFieldBlur}
            />
            <Button
              variant="contained"
              disabled={isSaveDisabled}
              onClick={onSave}
            >
              Save
            </Button>
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
  current: state.task.current === null ? {} : state.task.current,
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
