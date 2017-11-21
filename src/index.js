import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Layout = (props) => {
    return (
        <div className="container todo">
            <div className="row">
                <div className="column xlarge-2 medium-1 hide-mobile"></div>
                {props.children}
                <div className="column xlarge-2 medium-1 hide-mobile"></div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Layout><App /></Layout>,
    document.getElementById('root')
);