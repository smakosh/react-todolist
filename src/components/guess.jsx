import React from 'react'
import '../styles/guess.css'

const Guess = (props) => (
    <div className="center-text guess">
        <button onClick={props.whatTodo} className="btn btn-rounded btn-outlined purple-btn">What to do?</button>
    </div>
)


export default Guess