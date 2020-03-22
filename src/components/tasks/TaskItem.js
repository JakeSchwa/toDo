import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, setCurrent } from '../../actions/taskActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import EditTaskModal from './EditTaskModal'
import PropTypes from 'prop-types'

const TaskItem = ({ task, deleteTask, setCurrent }) => {
  const { id, description } = task
  const onDelete = () => {
    deleteTask(id)
    M.toast({ html: 'Task Deleted' })
  }

  return (
    <div>
      <EditTaskModal />
      <li className="collection-item">
        <div>
          <a href="#!">{description}</a>
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
          <a href="#!" onClick={onDelete} className="secondary-content">
            <i className="material-icons">delete</i>
          </a>
          <a
            href="#edit-task-modal"
            onClick={() => setCurrent(task)}
            className="secondary-content"
          >
            <i className="material-icons">edit</i>
          </a>
        </div>
      </li>
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteTask, setCurrent })(TaskItem)
