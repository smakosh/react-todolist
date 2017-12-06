import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'
import '../styles/forms.css'

const Filter = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-3 hide-mobile"></div>
            <div className="column xlarge-6 small-12">
                <div className="input-field purple-input search">
                    <span className="search-icon"></span>
                    <input 
                        type="text" 
                        placeholder="Search for a task" 
                        autoComplete="off"
                        value={props.filters.text} 
                        onChange={(e) => {
                            props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                </div>
            </div>
            <div className="column xlarge-3 hide-mobile"></div>
        </div>
    </div>
)

const ConnectedFilter = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(ConnectedFilter)(Filter)