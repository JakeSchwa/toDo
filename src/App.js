import React, { useEffect } from 'react'
import './App.css'
import 'typeface-roboto'
// redux
import { Provider } from 'react-redux'
import store from './store'
import { Container } from '@material-ui/core'
// // components
import AddTaskForm from './components/layout/AddTaskForm'
import TaskList from './components/tasks/TaskList'
import Navbar from './components/layout/Navbar'
import SnackBar from './components/layout/SnackBar'

const App = () => {
  useEffect(() => {})

  return (
    <Provider store={store}>
      <SnackBar />
      <Navbar />
      <Container id="container">
        <AddTaskForm />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App
