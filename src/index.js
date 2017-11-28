import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './components/registerServiceWorker'
import AppRouter from './routers/AppRouters'

ReactDOM.render(
    <AppRouter />, document.getElementById('root')
)

registerServiceWorker()
