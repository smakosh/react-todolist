// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date'
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_TYPE':
            return {
                ...state,
                sortBy: 'type'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        default:
            return state
    }
}