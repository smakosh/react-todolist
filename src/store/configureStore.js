import { createStore, combineReducers } from 'redux'
import taskReducer from '../reducers/tasks'
import errorReducer from '../reducers/errors'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            tasksToDo: taskReducer,
            filters: filtersReducer,
            Error: errorReducer
        })
    )

    return store
}