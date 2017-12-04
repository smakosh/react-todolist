import React from 'react'
import '../styles/task.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Tasks = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="card tasks">
                    <div className="single-task" key={props.tasks.id}>
                        <h4>{props.tasks.length}</h4>
                        <div className="buttons">
                            <Link to="/edit/">
                                <i className="fa fa-pencil-square-o"></i>
                            </Link>
                            <a 
                            onClick={(e) => {
                            props.deleteTask(props.tasks.name);
                            }}
                            >
                                <i className="fa fa-close"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
    </div>
)

const ConnectedTasks = (state) => {
    return {
        tasks: state.tasksToDo,
        name: state.tasksToDo.name,
        id: state.tasksToDo.id
    }
}

export default connect(ConnectedTasks)(Tasks)