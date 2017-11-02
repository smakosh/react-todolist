import React, { Component } from 'react';

export default class CreateTask extends Component {
    render() {
        return (
            <div className="container todo">
                <h2>Simple todo React app</h2>
                <div className="card">
                    <div className="input-field purple-input">
                        <span className="task-icon"></span>
                        <input type="text" />
                    </div>
                    <div className="center-text">
                        <button className="btn btn-rounded btn-outlined purple-btn">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}