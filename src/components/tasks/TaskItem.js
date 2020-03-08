import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = ({ description }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#!">{description}</a>
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
        <a href="#!" className="secondary-content">
          <i className="material-icons">delete</i>
        </a>
        <a href="#!" className="secondary-content">
          <i className="material-icons">edit</i>
        </a>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TaskItem
