import React from 'react'
import { connect } from 'react-redux'
import { setCurrent } from '../../actions/taskActions'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ListItem from '@material-ui/core/ListItem'

//current

const TaskItem = ({ task }) => {
  const { id, description } = task
  // const onDelete = () => {
  //   deleteTask(id)
  //   M.toast({ html: 'Task Deleted' })
  // }

  return (
    <ListItem>
      <Card key={id} button role={undefined} onClick={null}>
        <CardContent>{description}</CardContent>
      </Card>
    </ListItem>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

// TaskItem

export default connect(null, { setCurrent })(TaskItem)
