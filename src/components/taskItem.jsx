import React from 'react'
import { Link } from 'react-router-dom'
import { removeTask } from '../actions/tasks'
import { connect } from 'react-redux'

const TaskItem = ({ dispatch, id, name, type, day, time }) => (
    <div className="single-task">
        <div>
        <h4>{name}</h4>
        <p>{type}</p>
        <p>{day}</p>
        <p>{time}</p>
        </div>
        <div className="buttons">
            <Link to={`/edit/${id}`}>
                <i className="fa fa-pencil-square-o"></i>
            </Link>
            <a onClick={(event) => {
                dispatch(removeTask({ id: id }
            ))}}>
                <i className="fa fa-close"></i>
            </a>
        </div>
    </div>
)

export default connect()(TaskItem)