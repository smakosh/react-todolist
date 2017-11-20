import React from 'react'

const Do = (props) => {
    return (
        <div className="center-text random">
            <button 
            className="btn btn-rounded btn-outlined green-btn"
            onClick={props.whatIdo}
            hidden={!props.hasTasks}
            >
                What do I do?
            </button>
        </div>
    )
}

export default Do