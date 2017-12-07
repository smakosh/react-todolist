import React, { Component } from 'react'
import ModalAlert from './modal'

class TaskForm extends Component {
    state = {
        name: '',
        type: '',
        day: '',
        time: '',
        selectedTask: undefined
    }

    onSubmit = (e) => {
        e.preventDefault()
        const singletask = e.target.elements.singletask.value.trim().toLowerCase()
        const type = e.target.elements.type.value
        const date = e.target.elements.date.value
        const time = e.target.elements.time.value
        if(type !== 'Design' && type !== 'Code' && type !== 'Lifestyle' && type !== 'Other') {
            this.setState(() => ({selectedTask: 'Choose a category!'}))
        }
        else if(!singletask && !date && !time) {
            this.setState(() => ({selectedTask: 'Please fill in all the fields!'}))
        } else if(this.state.name.indexOf(singletask) > -1) {
            this.setState(() => ({selectedTask: 'This task already exists!'}))
        } else {
            this.setState(() => ({
                name: singletask,
                type: type,
                day: date,
                time: time
            }))
            console.log(this.state.name)
            this.props.addTask(
                {
                    name: this.state.name,
                    type: this.state.type,
                    day: this.state.day,
                    time: this.state.time
                }
            )
            e.target.elements.singletask.value = ''
            e.target.elements.type.value = ''
            e.target.elements.date.value = ''
            e.target.elements.time.value = ''
        }
    }
    closeModal = () => {
        this.setState(() => ({selectedTask: undefined}))
    }
    render() {
        return (
            <div className="card">
                <form onSubmit={this.onSubmit}>
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
                                    <option value="Code">Code</option>
                                    <option value="Design">Design</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Other">Other</option>
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
                <ModalAlert
                    selectedTask={this.state.selectedTask}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default TaskForm