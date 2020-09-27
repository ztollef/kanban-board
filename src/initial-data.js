const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'loris' },
    'task-2': { id: 'task-2', content: 'giraffe' },
    'task-3': { id: 'task-3', content: 'elephant' },
    'task-4': { id: 'task-4', content: 'lion' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: []
    },
    
    'column-3': {
      id: 'column-3',
      title: 'In review',
      taskIds: []
    },

    'column-4': {
      id: 'column-4',
      title: 'Ready for release',
      taskIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
}

export default initialData;