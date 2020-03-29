import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { addTask } from '../../actions/taskActions'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const AddTaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('')
  const [showError, setShowError] = useState(false)
  const [helperText, setHelperText] = useState(' ')

  const handleSubmit = event => {
    setDescription(description.trim())
    if (taskIsValid()) {
      postTask()
      setDescription('')
    }
    event.preventDefault()
  }

  const postTask = () => {
    setDescription()
    const newTask = {
      completed: false,
      description,
    }
    addTask(newTask)
  }

  const taskIsValid = () => {
    if (description.trim() === '') {
      setShowError(true)
      setHelperText('Include Task Description')
      return false
    }
    setShowError(false)
    setHelperText(' ')
    setDescription('')
    return true
  }

  const handleChange = event => {
    if (event.target.value.trim() !== '') {
      setShowError(false)
    }
    setDescription(event.target.value)
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} id="add-task-form">
          <TextField
            id="add-task-input"
            placeholder="Task Description"
            onChange={handleChange}
            error={showError}
            value={description}
            helperText={helperText}
            autoComplete="off"
            fullWidth
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
