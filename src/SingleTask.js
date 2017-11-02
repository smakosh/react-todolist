import React, { Component } from 'react';

export default class SingleTask extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Learn React Js'
        }
    }
    render() {
        return (
            <div className="single-task">
                <h4>{this.state.name}</h4>
                <a href="#"><i className="fa fa-close"></i></a>
            </div>
        );
    }
}