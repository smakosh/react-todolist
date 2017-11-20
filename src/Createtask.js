import React from 'react'

const CreateTask = (props) => {
    return (
        <div className="card create">
            <form onSubmit={props.onSubmit}>
                <div className="input-field purple-input">
                    <span className="task-icon"></span>
                    <input type="text" name="singletask" value={props.name} />
                </div>
                <div className="center-text">
                    <button 
                    className="btn btn-rounded btn-outlined purple-btn"
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask