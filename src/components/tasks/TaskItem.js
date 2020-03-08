import React from 'react'

const TaskItem = ({ description }) => {
  return (
    <li>
      <a href="#!" className="collection-item">
        {description}
      </a>

      <a href="#!" className="secondary-content">
        <i className="material-icons">send</i>
      </a>
    </li>
  )
}

export default TaskItem
