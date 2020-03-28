import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../actions/taskActions'
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

const TaskItem = ({ task, deleteTask }) => {
  const { id, description } = task

  const onDelete = () => {
    deleteTask(id)
  }

  return (
    <div className="task-item-container">
      <ListItem button divider={true}>
        <ListItemIcon>
          <Checkbox edge="start" />
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
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default connect(null, { deleteTask })(TaskItem)
