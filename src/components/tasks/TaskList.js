import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = async () => {
    const res = await fetch('/tasks')
    const data = await res.json()
    setData(data)
  }

  const displayTasks = () => {
    return data.map(item => (
      <TaskItem key={item.id} description={item.description} />
    ))
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Tasks</h4>
      </li>
      {displayTasks()}
    </ul>
  )
}

export default TaskList
