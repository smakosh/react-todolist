import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/tasks'
import '../styles/forms.css'

const Create = (props) => (
    <div className="container create">
        <div className="card">
            <form onSubmit={(event) => {
                event.preventDefault()
                const singletask = event.target.elements.singletask.value.trim().toLowerCase()
                const type = event.target.elements.type.value
                const date = event.target.elements.date.value
                const time = event.target.elements.time.value
                if(!singletask && !type && !date && !time) {
                    this.setState(() => ({selectedTask: 'Please fill in all the fields!'}))
                } else {
                    props.dispatch(addTask(
                        { 
                            name: singletask,
                            type: type,
                            day: date,
                            time: time
                        }
                    ))}
                    event.target.elements.singletask.value = ''
                    event.target.elements.type.value = ''
                    event.target.elements.date.value = ''
                    event.target.elements.time.value = ''
            }}>
                <div className="row">
                    <div className="column xlarge-3 small-12">
                        <div className="input-field purple-input">
                            <span className="task-icon"></span>
                            <input type="text" name="singletask" placeholder="Enter a new task" autoComplete="off" />
                        </div>
                    </div>
                    <div className="column xlarge-3 small-12">
                        <div className="input-field purple-input">
                            <select name="type">
                                <option value="Design">Design</option>
                                <option value="Code">Code</option>
                                <option value="Lifestyle">Lifestyle</option>
                            </select>
                        </div>
                    </div>
                    <div className="column xlarge-3 small-12">
                        <div className="input-field purple-input">
                            <input type="date" name="date" placeholder="Pick Date" autoComplete="off" />
                        </div>
                    </div>
                    <div className="column xlarge-3 small-12">
                        <div className="input-field purple-input">
                            <input type="time" name="time" placeholder="Setup time" autoComplete="off" />
                        </div>
                    </div>
                </div>
                <div className="center-text">
                    <button type="submit" className="btn btn-rounded btn-outlined purple-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
)

const ConnectCreate = (state) => {
    return {
        tasks: state.tasksToDo
    }
}

export default connect(ConnectCreate)(Create)