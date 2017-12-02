import React, { Component } from 'react'
import Create from './create-task'
import Tasks from './tasks'
import Guess from './guess'
import Deleteall from './delete-all'
import Link from './link'
import ModalAlert from './modal'
import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

import '../styles/App.css'

// actions

// ADD_TASK
const addTask = (
  {
    name = '',
    type = '',
    day = '',
    time = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_TASK',
  tasksToDo: {
    id: uuid(),
    name,
    type,
    day,
    time,
    createdAt
  }
})
// EDIT_TASK

// DELETE_TASK

// DELETE_ALL

const taskReducerDefaultState = []

const taskReducer = (state = taskReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.tasksToDo
      ]
    default:
      return state
  }
}

const errorReducer = (state = {Error: undefined}, action) => {
  switch(action.type) {
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    tasksToDo: taskReducer,
    Error: errorReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTask(
  { 
    name: 'Go to sleep',
    type: 'Lifestyle',
    day: 'tomorrow',
    time: '2:00 PM'
  }
))

// dummy data
const TasksData = {
  tasksToDo: [{
    id: 'bsdfkjb13784y324',
    name: 'Learn redux',
    type: 'design',
    day: 'tomorrow',
    time: '10:00',
    createdAt: 0
  }],
  Error: undefined
}


export default class App extends Component {
  state = {
    tasks: [],
    selectedTask: undefined
  }

  componentDidMount = () => {
    try {
        const json = localStorage.getItem('tasks')
        const tasks = JSON.parse(json)

        if (tasks) {
            this.setState(() => ({tasks}))
        }
    } catch(e) {
        this.setState(() => ({selectedTask: 'Something went wrong!'}))
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
      if(prevState.tasks.length !== this.state.tasks.length) {
          const json = JSON.stringify(this.state.tasks)
          localStorage.setItem('tasks', json)
      }
  }

  deleteTask = (taskTodelete) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskTodelete !== task)
    }))
  }

  whatTodo = () => {
    const randNum = Math.floor(Math.random() * this.state.tasks.length)
    const task = this.state.tasks[randNum]
    this.setState(() => ({selectedTask: task}))
  }

  deleteAll = () => {
    this.setState(() => ({tasks: []}))
  }

  closeModal = () => {
    this.setState(() => ({selectedTask: undefined}))
  }
  onSubmit = (event) => {
    event.preventDefault()
    const singletask = event.target.elements.singletask.value.trim().toLowerCase()
    if(!singletask) {
        this.setState(() => ({selectedTask: 'Please enter a task!'}))
    } else if(this.state.tasks.indexOf(singletask) > -1) {
        this.setState(() => ({selectedTask: 'This task already exists!'}))
    } else this.setState((prevState) => ({ tasks: prevState.tasks.concat(singletask) }))
    event.target.elements.singletask.value = ''
  }
  render() {
    return (
      <div>
        <Create 
        onSubmit={this.onSubmit} 
        />
        { this.state.tasks.length > 0 ?
          <Guess
            whatTodo={this.whatTodo}
          />
          : null
        }
        {
          this.state.tasks.length === 0 &&
          <div className="center-text">
            <h4>Please Enter a task!</h4>
          </div>
        }
        { this.state.tasks.length > 0 ?

          <Tasks
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
          />
          : null
        }
        { this.state.tasks.length > 0 ?
          <Deleteall
            deleteAll={this.deleteAll}
          />
          : null
        }
        <ModalAlert
            selectedTask={this.state.selectedTask}
            closeModal={this.closeModal}
        />
        <Link />
      </div>
    )
  }
}