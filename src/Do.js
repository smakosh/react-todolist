import React, { Component } from 'react';

class Do extends Component {
    render() {
        return (
            <div className="center-text random">
                <button 
                className="btn btn-rounded btn-outlined green-btn"
                onClick={this.props.whatIdo}
                disabled={!this.props.hasTasks}
                >
                    What do I do?
                </button>
            </div>
        );
    }
}

export default Do;