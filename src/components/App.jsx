import React, { Component } from 'react'
import Create from './create-task'
import ConnectedTasks from './tasks'
import Link from './link'

export default class App extends Component {

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

  render() {
    return (
      <div>
        <Create />
        <ConnectedTasks />
        <Link />
      </div>
    )
  }
}