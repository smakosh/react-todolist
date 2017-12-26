// tasks Reducer
const taskReducerDefaultState = []

const taskReducer = (state = taskReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.tasksToDo
      ]
    case 'EDIT_TASK':
      return state.map((tasksToDo) => {
        if (tasksToDo.id === action.id) {
          return {
            ...tasksToDo,
            ...action.updates
          }
        } else {
          return tasksToDo
        }
      })
    case 'DELETE_TASK':
      return  state.filter(({ id }) => id !== action.id)
    case 'DELETE_ALL':
      return  taskReducerDefaultState
    default:
      return state
  }
}

export default taskReducer