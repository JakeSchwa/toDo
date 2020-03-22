import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addTask } from '../../actions/taskActions'
import PropTypes from 'prop-types'

const AddTaskModal = ({ addTask }) => {
  const [description, setDescription] = useState('')

  const onSubmit = () => {
    if (description === '') {
      M.toast({ html: 'Please enter a description for the todo' })
    } else {
      const newTask = {
        completed: false,
        description,
      }

      addTask(newTask)

      M.toast({ html: 'Todo added successfully' })

      // clear fields
      setDescription('')
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      const elem = document.querySelector('#add-task-modal')
      const instance = M.Modal.getInstance(elem)
      onSubmit()
      instance.close()
    }
  }

  return (
    <div id="add-task-modal" className="modal">
      <div className="modal-content">
        <h4>Enter New Todo</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

AddTaskModal.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default connect(null, { addTask })(AddTaskModal)
