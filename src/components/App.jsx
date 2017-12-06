import React, { Component } from 'react'
import Create from './create-task'
import ConnectedTasks from './tasks'
import Guess from './guess'
import Deleteall from './delete-all'
import Link from './link'
import ModalAlert from './modal'
import Filter from './filter'

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
  render() {
    return (
      <div>
        <Create />
        { this.state.tasks.length > 0 ?
          <Guess
            whatTodo={this.whatTodo}
          />
          : null
        }
        {
          this.state.tasks.length !== 0 &&
          <div className="center-text">
            <h4>Please Enter a task!</h4>
          </div>
        }
          <Filter />
          <ConnectedTasks />
        { this.state.tasks.length < 0 ?
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