import React from 'react'

const TaskItem = ({ description }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#!">{description}</a>
        <a href="#!" className="secondary-content">
          <i className="material-icons">send</i>
        </a>
      </div>
    </li>
  )
}

export default TaskItem
