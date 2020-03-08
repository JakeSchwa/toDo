import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTaskModal = () => {
  const [description, setDescription] = useState('')

  const addTask = async task => {
    try {
      const res = await fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  const onSubmit = () => {
    if (description === '') {
      M.toast({ html: 'Please enter a description for the todo' })
    } else {
      const newTask = {
        completed: false,
        description
      }

      addTask(newTask)

      M.toast({ html: 'Todo added successfully' })

      // clear fields
      setDescription('')
    }
  }

  return (
    <div id='add-task-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter New Todo</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Todo Description
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

export default AddTaskModal
