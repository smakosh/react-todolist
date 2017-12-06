// Get visible tasks

export default (tasks, { text, sortBy }) => {
    return tasks.filter((task) => {
      const textMatch = task.name.toLowerCase().includes(text.toLowerCase())
      
      return textMatch
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'type') {
        return a.type < b.type ? 1 : -1
      }
    })
}