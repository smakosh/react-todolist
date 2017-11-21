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

    componentDidMount() {
        try {
            const json = localStorage.getItem('tasks')
            const tasks = JSON.parse(json)

            if (tasks) {
                this.setState(() => ({tasks}))
            }
        } catch(e) {
            alert('Something went wrong')
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.tasks.length !== this.state.tasks.length) {
            const json = JSON.stringify(this.state.tasks)
            localStorage.setItem('tasks', json)
        }
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
                <div className="row">
                    <div className="column xlarge-2 medium-1 hide-mobile"></div>
                    <div className="column xlarge-8 medium-10 small-12">
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
                    { this.state.tasks.length === 0 && <h4 className="center-text title">Please add a task to get started!</h4> } 
                    { this.state.tasks.length > 0 ? 
                    <Tasks 
                        tasks={this.state.tasks} 
                        deleteTask={this.deleteTask}
                    /> 
                    : null }
                    

                    <DeleteAll 
                        deleteAll={this.deleteAll}
                        hasTasks={this.state.tasks.length > 0 }
                    />
                    </div>
                    <div className="column xlarge-2 medium-1 hide-mobile"></div>
                </div>
            </div>
        )
    }
}