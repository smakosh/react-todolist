import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import { removeTask } from '../../actions/tasks'

const SingleTask = ({ dispatch, id, name, type, day, time }) => (
    <div className="single-task">
        <div>
        <h4>{name}</h4>
        <p>{type}</p>
        <p>{moment(day).format('YYYY MM D')}</p>
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

export default connect()(SingleTask)