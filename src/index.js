import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './components/registerServiceWorker'
import AppRouter from './routers/AppRouters'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addTask } from './actions/tasks'

import './styles/App.css'

const store = configureStore()

store.dispatch(addTask(
    { 
        name: 'Go to sleep',
        type: 'Lifestyle',
        day: 'tomorrow',
        time: '2:00 PM'
    }
))

store.dispatch(addTask(
    { 
        name: 'Get to code',
        type: 'Code',
        day: 'today',
        time: '10:00 AM'
    }
))

//  store.dispatch(removeTask({ id: taskOne.tasksToDo.id }))
// store.dispatch(editTask(taskTwo.tasksToDo.id, { day: 'Tomorrow' }))
//  store.dispatch(deleteAll())
// store.dispatch(setTextFilter('to'));
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(
    jsx, document.getElementById('root')
)

registerServiceWorker()
