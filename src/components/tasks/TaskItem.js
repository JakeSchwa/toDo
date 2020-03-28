import React from 'react'
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
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const { id, description, completed } = task

  const onDelete = () => {
    deleteTask(id)
  }

  const onComplete = event => {
    if (event.target.checked) {
      const completedTask = {
        id,
        description,
        completed: true,
      }
      updateTask(completedTask)
    }
  }

  return !completed ? (
    <div className="task-item-container">
      <ListItem button divider={true}>
        <ListItemIcon>
          <Checkbox edge="start" onChange={onComplete} />
        </ListItemIcon>
        <ListItemText id={`task-id-${id}`} primary={description} />
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
