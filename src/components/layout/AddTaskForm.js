import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { addTask } from '../../actions/taskActions'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Snackbar from '@material-ui/core/Snackbar'

const AddTaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('')
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState(' ')
  const [showSnack, setShowSnack] = useState(false)

  const handleClose = () => {
    setShowSnack(false)
  }

  const displaySnackBar = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={showSnack}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Task Added"
      />
    )
  }

  const handleSubmit = event => {
    if (taskIsValid()) {
      postTask()
      setShowSnack(true)
    } else {
      showError(true)
    }
    setDescription('')
    event.preventDefault()
  }

  const postTask = () => {
    const newTask = {
      completed: false,
      description,
    }
    addTask(newTask)
  }

  const showError = isError => {
    if (isError) {
      setError(true)
      setHelperText('Include Task Description')
    } else {
      setError(false)
      setHelperText(' ')
    }
  }

  const taskIsValid = () => {
    if (description.trim() === '') {
      return false
    }
    return true
  }

  const handleChange = event => {
    if (event.target.value.trim() !== '') {
      showError(false)
    }
    setDescription(event.target.value)
  }

  return (
    <>
      {displaySnackBar()}
      <Card id="add-task-card">
        <CardContent>
          <form onSubmit={handleSubmit} id="add-task-form">
            <TextField
              id="add-task-input"
              placeholder="Task Description"
              onChange={handleChange}
              error={error}
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
    </>
  )
}

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default connect(null, { addTask })(AddTaskForm)
