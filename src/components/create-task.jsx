import React from 'react';

const Create = (props) => (
    <div className="container create">
        <div className="card">
            <form onSubmit={props.onSubmit}>
                <div className="input-field purple-input">
                    <span className="task-icon"></span>
                    <input type="text" name="singletask" autoComplete="off" />
                </div>
                <div className="center-text">
                    <button type="submit" className="btn btn-rounded btn-outlined purple-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
)

export default Create