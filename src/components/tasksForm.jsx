import React, { Component } from 'react'
import ModalAlert from './modal'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
const today = now.format('YYYY MM D')

export default class TaskForm extends Component {
    state = {
        name: '',
        type: '',
        day: moment(),
        time: '',
        createdAt: '',
        calendarFocused: false,
        selectedTask: undefined
    }

    onNameChange = (e) => {
        const name = e.target.value.trim().toLowerCase()
        this.setState(() => ({ name }))
    }

    onDateChange = (day) => {
        this.setState(() => ({ day }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    closeModal = () => {
        this.setState(() => ({selectedTask: undefined}))
    }
    render() {
        return (
            <div className="card">
                <form>
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
                                    <option value="Code">Code</option>
                                    <option value="Design">Design</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="column xlarge-3 small-12">
                            <SingleDatePicker
                                date={this.state.day}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                        <div className="column xlarge-3 small-12">
                            <div className="input-field purple-input time">
                                <input type="text" name="time" placeholder="Setup time" autoComplete="off" />
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