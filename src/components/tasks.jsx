import React from 'react'
import '../styles/task.css'
import { connect } from 'react-redux'
import TaskItem from './taskItem'
import selectTasks from '../selectors/tasks'
import DeleteAll from './delete-all'
import Filter from './filter'

const Tasks = (props) => (
    <div className="container">
        {
            props.tasks.length === 0 &&
            <div className="center-text">
            <h4>Please Enter a task!</h4>
            </div>
        }
        {
            props.tasks.length > 0 ?
            <Filter />
            : null
        }
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="tasks">
                    { props.tasks.map((task) => {
                        return <TaskItem key={task.id} {...task} />
                    })}
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
        {
            props.tasks.length > 0 ?
            <DeleteAll />
            : null
        }
    </div>
)

const ConnectedTasks = (state) => {
    return {
        tasks: selectTasks(state.tasksToDo, state.filters)
    }
}

export default connect(ConnectedTasks)(Tasks)