import React, { useEffect } from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
// redux
import { Provider } from 'react-redux'
import store from './store'
// components
import AddBtn from './components/layout/AddBtn'
import AddTaskModal from './components/tasks/AddTaskModal'
import TaskList from './components/tasks/TaskList'
import Navbar from './components/layout/Navbar'

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <TaskList />
        <AddBtn />
        <AddTaskModal />
      </div>
    </Provider>
  )
}

export default App
