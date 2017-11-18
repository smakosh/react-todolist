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
            term: '',
            tasks: ['Learn React Js', 'Learn Node Js', 'Learn Angular Js']
        }
        this.deleteTask = this.deleteTask.bind(this);
        this.onChange = this.onChange.bind(this);
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

    onChange(event) {
        this.setState(({ term: event.target.value }))
    }

    onSubmit(event) {
        event.preventDefault()
        this.setState(() => ({
            term: '',
            tasks: [...this.state.tasks, this.state.term]}))
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
                    onChange={this.onChange} 
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
                />
            </div>
        );
    }
}