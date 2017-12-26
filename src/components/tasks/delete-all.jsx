import React from 'react'
import { connect } from 'react-redux'
import { deleteAll } from '../../actions/tasks'

const Deleteall = ({ dispatch }) => (
    <div className="center-text deleteall">
            <button 
                onClick={(e) => {
                    dispatch(deleteAll())}} 
                className="btn btn-rounded btn-outlined red-btn"
            >
                Delete All
            </button>
    </div>
)

export default connect()(Deleteall)