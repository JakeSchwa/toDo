import React, { useEffect } from 'react'
import './App.css'
import 'typeface-roboto'
// redux
import { Provider } from 'react-redux'
import store from './store'
import { Container } from '@material-ui/core'
// // components
import AddTaskForm from './components/layout/AddTaskForm'
// import AddTaskModal from './components/tasks/AddTaskModal'
import TaskList from './components/tasks/TaskList'
import Navbar from './components/layout/Navbar'
// import EditTaskModal from './components/tasks/EditTaskModal'

const App = () => {
  useEffect(() => {})

  return (
    <Provider store={store}>
      <Navbar />
      <Container>
        <AddTaskForm />
        <TaskList />
        {/* <AddTaskModal />
        <EditTaskModal /> */}
      </Container>
    </Provider>
  )
}

export default App
