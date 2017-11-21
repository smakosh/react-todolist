import React from 'react'

const CreateTask = (props) => {
    return (
        <div className="card create">
            <form onSubmit={props.onSubmit}>
                <div className="input-field orange-input">
                    <span className="task-icon"></span>
                    <input type="text" placeholder="Add new Task" name="singletask" value={props.name} autocomplete="off"/>
                </div>
                <button className="btn btn-rounded btn-outlined orange-btn create-btn">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateTask
