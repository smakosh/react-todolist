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
                <div className="single-task" key={index}>
                    <h4 >{name}</h4>
                    <a href="#"><i className="fa fa-close"></i></a>                
                </div>
            )
        })
        return (
            <div className="card">
                {tasks}
            </div>
        );
    }
}