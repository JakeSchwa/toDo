import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteTask, updateTask } from '../../actions/taskActions'
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

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const { id, completed } = task
  const [taskDescription, setTaskDescription] = useState(task.description)
  const [isEditing, setIsEditing] = useState(false)

  const onSave = () => {
    const editedTask = {
      id,
      description: taskDescription,
      completed,
    }
    updateTask(editedTask)
    setIsEditing(false)
  }

  const onCancel = () => {
    setTaskDescription(task.description)
    setIsEditing(false)
  }

  const onDelete = () => {
    deleteTask(id)
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
        {isEditing ? (
          <>
            <TextField
              value={taskDescription}
              autoFocus={true}
              onChange={event => setTaskDescription(event.target.value)}
            />
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </>
        ) : (
          <ListItemText
            id={`task-id-${id}`}
            primary={taskDescription}
            onClick={() => setIsEditing(true)}
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

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
}

export default connect(null, { deleteTask, updateTask })(TaskItem)
