import React, { Component } from 'react'
import Title from './Title.js'
import CreateTask from './Createtask.js'
import Tasks from './Tasks.js'
import Do from './Do.js'
import DeleteAll from './DeleteAll.js'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
        this.deleteTask = this.deleteTask.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.whatIdo = this.whatIdo.bind(this)
        this.hasTasks = this.hasTasks.bind(this)
    }

    deleteTask(index) {
        var tasksup = this.state.tasks.slice()
        tasksup.splice(index, 1)
        this.setState(() => ({ tasks: tasksup }))
    }

    onSubmit(event) {
        event.preventDefault()
        const singletask = event.target.elements.singletask.value.trim()
        if(!singletask) {
            alert('Please enter a task!')
        } else if(this.state.tasks.indexOf(singletask) > -1) {
            alert('This task already exists!')
        } else this.setState((prevState) => ({ tasks: prevState.tasks.concat(singletask) }))
        event.target.elements.singletask.value = ''
    }
    deleteAll() {
        this.setState(() => ({tasks: []}))
    }
    hasTasks() {
        alert('no available tasks!')
    }
    whatIdo() {
        const randNum = Math.floor(Math.random() * this.state.tasks.length)
        const task = this.state.tasks[randNum]
        alert(task)
    }
      
    render() {
        return (
            <div className="container todo">
                <Title 
                    title="A Simple todolist React app" 
                />
                <CreateTask 
                    onSubmit={this.onSubmit} 
                    name={this.state.name}
                />
                <Do
                    whatIdo={this.whatIdo} 
                    hasTasks={this.state.tasks.length > 0 }
                />
                <Tasks 
                    tasks={this.state.tasks} 
                    deleteTask={this.deleteTask}
                />

                <DeleteAll 
                    deleteAll={this.deleteAll}
                    hasTasks={this.state.tasks.length > 0 }
                />
            </div>
        );
    }
}