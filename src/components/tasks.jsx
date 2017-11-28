import React from 'react'
import '../styles/task.css'
import { Link } from 'react-router-dom'

const Tasks = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="card tasks">
                    {   
                        props.tasks.map((task) =>
                            <div className="single-task" key={task}>
                                <h4>{task}</h4>
                                <div className="buttons">
                                    <Link to="/edit/" params={{ task: {task}}}>
                                        <i className="fa fa-pencil-square-o"></i>
                                    </Link>
                                    <a 
                                    onClick={(e) => {
                                    props.deleteTask(task);
                                    }}
                                    >
                                        <i className="fa fa-close"></i>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
    </div>
)

export default Tasks