import React from 'react'
import '../styles/task.css'
import { connect } from 'react-redux'
import TaskItem from './taskItem'
import selectTasks from '../selectors/tasks'

const Tasks = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="card tasks">
                    { props.tasks.map((task) => {
                        return <TaskItem key={task.id} {...task} />
                    })}
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
    </div>
)

const ConnectedTasks = (state) => {
    return {
        tasks: selectTasks(state.tasksToDo, state.filters)
    }
}

export default connect(ConnectedTasks)(Tasks)