import React, { Component } from 'react';
import CreateTask from './CreateTask';
import SingleTask from './SingleTask';

export default class Tasks extends Component {
    render() {
        //const tasks = ['Learn React Js',
                        //'Learn Node Js',
                        //'Learn Angular Js'];
        //var list = [
        //    <SingleTask tasks={tasks[0]}/>,
        //    <SingleTask tasks={tasks[1]}/>,
        //    <SingleTask tasks={tasks[2]}/>
        //];
        return (
            <div>
                <CreateTask />
                <div className="container">
                    <SingleTask />
                </div>
            </div>  
        );
    }
}