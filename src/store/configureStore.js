import { createStore, combineReducers } from 'redux'
import taskReducer from '../reducers/tasks'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            tasksToDo: taskReducer,
            filters: filtersReducer
        })
    )

    return store
}