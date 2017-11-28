import React from 'react'

const Deleteall = (props) => (
    <div className="center-text deleteall">
            <button onClick={props.deleteAll} className="btn btn-rounded btn-outlined red-btn">Delete All</button>
    </div>
)

export default Deleteall