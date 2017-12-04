import uuid from 'uuid'

// actions

// ADD_TASK
export const addTask = (
    {
      name = '',
      type = '',
      day = '',
      time = '',
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_TASK',
    tasksToDo: 
    {
      id: uuid(),
      name,
      type,
      day,
      time,
      createdAt
    }
  })

  // DELETE_TASK
  export const removeTask = ({ id } = {}) => (
    {
      type: 'DELETE_TASK',
      id
    }
  )
  // EDIT_TASK
  export const editTask = (id, updates) => (
    {
      type: 'EDIT_TASK',
      id,
      updates
    }
  )

  // DELETE_ALL
  export const deleteAll = () => (
    {
      type: 'DELETE_ALL'
    }
  )