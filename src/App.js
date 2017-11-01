import React from 'react';
//import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'this is the state text',
            counter: 0
        }
    }
    update( e ) {
        this.setState({text: e.target.value})
    }
    increment ( e ) {
        this.setState(
            { counter: e.target.value++ } 
        )
    }
    render() {
        //let data = this.props.data
        //let counter = this.props.counter
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input 
                    type='text'
                    onChange={this.update.bind(this)} />
                <p>{this.state.counter}</p>
                <button onClick={this.increment.bind(this)} value="1">Increment</button>
            </div>
        )
    }
}

//App.propTypes = {
//    data: PropTypes.string,
//    counter: PropTypes.number.isRequired
//}

//App.defaultProps = {
//    data: "default text"
//}

export default App