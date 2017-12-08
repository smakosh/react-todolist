import React, { Component } from 'react'
import ModalAlert from './modal'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const now = moment()
const today = now.format('YYYY MM D')

export default class TaskForm extends Component {
    state = {
        name: '',
        type: '',
        day: moment(),
        time: '',
        createdAt: today,
        selectedTask: undefined
    }

    onNameChange = (e) => {
        const name = e.target.value.trim().toLowerCase()
        this.setState(() => ({ name }))
    }

    onDateChange = (day) => {
        if(!day) {
            this.setState(() => ({ day: today }))
        } else {
            this.setState(() => ({ day }))
        }
    }

    onTimeChange = (e) => {
        const time = e.target.value
        this.setState(() => ({ time }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        const type = e.target.type.value
        this.setState(() => ({ type }))
        
        if(this.state.day === '') {
            const day = moment()
            this.setState(() => ({ day }))
        }
        
        if(this.state.name === '' || this.state.type === '' || this.state.day === '' || this.state.time === '') {
            this.setState(() => ({ selectedTask: 'Fill in all the fields' }))
        } else {
            this.props.addTask(
                {
                    name: this.state.name,
                    type: this.state.type,
                    day: this.state.day.valueOf(),
                    time: this.state.time,
                    createdAt: this.state.createdAt
                }
            )
            e.target.type.value = ''
            this.setState(() => (
                {
                    name: '',
                    type: '',
                    day: moment(),
                    time: ''
                }
            ))
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
                                <input 
                                    type="text"
                                    placeholder="Enter a new task" 
                                    autoComplete="off"
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                                />
                            </div>
                        </div>
                        <div className="column xlarge-3 small-12">
                            <div className="input-field purple-input">
                                <select name="type">
                                    <option defaultValue value="Code">Code</option>
                                    <option value="Design">Design</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="column xlarge-3 small-12">
                            <div className="input-field purple-input">
                                <DatePicker
                                    placeholderText="Choose date"
                                    todayButton={"Today"}
                                    selected={this.state.day}
                                    onChange={this.onDateChange}
                                    minDate={moment().format('YYYY MM D')}
                                />
                            </div>
                        </div>
                        <div className="column xlarge-3 small-12">
                            <div className="input-field purple-input">
                                <input 
                                    type="time" 
                                    name="time"
                                    value={this.state.time}
                                    onChange={this.onTimeChange}
                                />
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