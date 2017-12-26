import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions/tasks'
import '../../styles/forms.css'
import TaskForm from './tasksForm'

const Create = (props) => (
    <div className="container create">
        <TaskForm 
            onSubmit={(task) => {
                props.dispatch(addTask(task))
                props.history.push('/')
            }}
        />
    </div>
)

const ConnectCreate = (state) => {
    return {
        task: state.tasksToDo
    }
}

export default connect(ConnectCreate)(Create)