import React from 'react'

const EditTask = (props) => {
    return (
        <div>
            <div className="container create">
                <div className="card">
                    <form>
                        <div className="input-field purple-input">
                            <span className="task-icon"></span>
                            <input type="text" value={props.match.params.task} name="editTask" autoComplete="off" />
                        </div>
                        <div className="center-text">
                            <button type="submit" className="btn btn-rounded btn-outlined purple-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditTask