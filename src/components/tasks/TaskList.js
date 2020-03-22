import React, { useEffect } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux'
//import Preloader from "../layout/Preloader";
import PropTypes from 'prop-types'
import { getTasks } from '../../actions/taskActions'

const TaskList = ({ task: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks()
    // eslint-disable-next-line
  }, [])

  const displayTasks = () => {
    return tasks.map(task => <TaskItem task={task} key={task.id} />)
  }

  if (loading || tasks === null) {
    return <div>LOADING...</div>
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

TaskList.propTypes = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  task: state.task,
})

export default connect(mapStateToProps, { getTasks })(TaskList)
