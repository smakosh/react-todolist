import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './components/registerServiceWorker'

ReactDOM.render(
    <App />, document.getElementById('root')
)

registerServiceWorker()
