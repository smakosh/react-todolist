import React, { Component } from 'react';

export default class SingleTask extends Component {
    constructor() {
        super();
        this.state = {
            tasks: ['Learn React Js', 'Learn Node Js', 'Learn Angular Js'],
        }
    }

    render() {
        var tasks = this.state.tasks;
        tasks = tasks.map(function(name, index){
            return (
                <SingleItem key={index} name={name} deleteTask={this.deleteTask}/>
            )
        }.bind(this));
        return (
            <div className="card">
                {tasks}
            </div>
        );
    }
    deleteTask(name) {
        var tasksup = this.state.tasks.filter(function(val, index) {
            return name !== val;
        })
        this.setState({
            tasks: tasksup
        })
    }
}

class SingleItem extends Component {

    render() {
        return (
            <div className="single-task">
                <h4 >{this.props.name}</h4>
                <a onClick={this.deleteSend.bind(this)}><i className="fa fa-close"></i></a>                
            </div>
        );
    }
    deleteSend(name) {
        this.props.deleteTask(this.props.name);
    }
}