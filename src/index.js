import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './components/registerServiceWorker'
import AppRouter from './routers/AppRouters'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/App.css'

const store = configureStore()

//  store.dispatch(removeTask({ id: taskOne.tasksToDo.id }))
// store.dispatch(editTask(taskTwo.tasksToDo.id, { day: 'Tomorrow' }))
//  store.dispatch(deleteAll())
// store.dispatch(setTextFilter('to'));
// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(
    jsx, document.getElementById('root')
)

registerServiceWorker()
