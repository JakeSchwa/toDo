import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { addTask } from '../../actions/taskActions'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const AddTaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('')

  const handleSubmit = event => {
    if (taskIsValid()) {
      sumbitNewTask()
      setDescription('')
    }
    event.preventDefault()
  }

  const sumbitNewTask = () => {
    const newTask = {
      completed: false,
      description,
    }
    addTask(newTask)
  }

  const taskIsValid = () => {
    if (description === '') {
      return false
    }
    return true
  }

  const handleChange = event => {
    setDescription(event.target.value)
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} id="add-task-form">
          <Input
            fullWidth
            id="add-task-input"
            placeholder="New Task Description"
            onChange={handleChange}
          />
          <Button
            id="add-task-submit-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default connect(null, { addTask })(AddTaskForm)
