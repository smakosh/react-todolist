import React from 'react'
import { Link } from 'react-router-dom'

const TaskItem = ({ name, type, day, time }) => (
    <div className="single-task">
        <div>
        <h4>{name}</h4>
        <p>{type}</p>
        <p>{day}</p>
        <p>{time}</p>
        </div>
        <div className="buttons">
            <Link to="/edit/">
                <i className="fa fa-pencil-square-o"></i>
            </Link>
            <a>
                <i className="fa fa-close"></i>
            </a>
        </div>
    </div>
)

export default TaskItem