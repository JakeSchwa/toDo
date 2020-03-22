import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateTask } from '../../actions/taskActions'
import PropTypes from 'prop-types'

const EditTaskModal = ({ current, updateTask }) => {
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (current) {
      setDescription(current.description)
    }
  }, [current])

  useEffect(() => {
    console.log('EDIT MODAL MOUNTED!!')
  }, [])

  const onSubmit = () => {
    if (description === '') {
      // M.toast({ html: 'Please enter a description' })
    } else {
      const updatedTask = {
        id: current.id,
        description,
      }

      updateTask(updatedTask)
      // M.toast({ html: 'Task updated' })

      // clear fields
      setDescription('')
    }
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      // const elem = document.querySelector('#edit-task-modal')
      // const instance = M.Modal.getInstance(elem)
      // onSubmit()
      // instance.close()
    }
  }

  return (
    <div id="edit-task-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit New Todo</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              placeholder="Description"
              name="Description"
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

const modalStyle = {
  width: '75%',
  height: '75%',
}

const mapStateToProps = state => ({
  current: state.task.current,
})

EditTaskModal.propTypes = {
  current: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { updateTask })(EditTaskModal)
