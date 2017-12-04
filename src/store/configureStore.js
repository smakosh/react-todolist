import { createStore, combineReducers } from 'redux'
import taskReducer from '../reducers/tasks'
import errorReducer from '../reducers/errors'

export default () => {
    const store = createStore(
        combineReducers({
            tasksToDo: taskReducer,
            Error: errorReducer
        })
    )

    return store
}