import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'
import '../styles/forms.css'
import TaskForm from './tasksForm'

const Create = (props) => (
    <div className="container create">
        <TaskForm 
            addTask={(tasks) => {
                props.dispatch(addTask(tasks))
            }}
        />
    </div>
)

const ConnectCreate = (state) => {
    return {
        tasks: state.tasksToDo
    }
}

export default connect(ConnectCreate)(Create)