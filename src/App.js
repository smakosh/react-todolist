import React, { Component } from 'react';
import Tasks from './Tasks.js'

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
    }

    deleteTask(index) {
        var tasksup = this.state.tasks.slice()
        tasksup.splice(index, 1)
        this.setState({
            tasks: tasksup
        })
    }

    onChange(event) {
        this.setState({ term: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()
        this.setState({
            term: '',
            tasks: [...this.state.tasks, this.state.term]
        })
    }
      
    render() {
        return (
            <div className="container todo">
                <h2>Simple todo React app</h2>
                <div className="card create">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-field purple-input">
                            <span className="task-icon"></span>
                            <input type="text" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className="center-text">
                            <button className="btn btn-rounded btn-outlined purple-btn">Submit</button>
                        </div>
                    </form>
                </div>
                <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            </div>
        );
    }
}