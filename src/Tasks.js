import React, { Component } from 'react'

export default class Tasks extends Component {
    deleteSend(index) {
        this.props.deleteTask(index)
        this.setState({
            term: ''
        })
    }

    render() {
        return (
            <div className="card tasks">
                {
                    this.props.tasks.map((name, index) =>
                        <div className="single-task" key={index}>
                            <h4>{name}</h4>
                            <a onClick={this.deleteSend.bind(this, index)}><i className="fa fa-close"></i></a>
                        </div>
                    )
                }
            </div>
        )
    }
}