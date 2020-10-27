const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'JWT authentication bug', owner: 'Zach' },
    'task-2': { id: 'task-2', content: 'Renew SSL certs ', owner: 'Billy' },
    'task-3': { id: 'task-3', content: 'Update text on homepage', owner: 'Adesh' },
    'task-4': { id: 'task-4', content: 'Add photo gallery feature', owner: 'Marge' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Backlog',
      taskIds: ['task-1', 'task-3', ]
    },
    
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: []
    },
    
    'column-3': {
      id: 'column-3',
      title: 'In review',
      taskIds: ['task-2']
    },

    'column-4': {
      id: 'column-4',
      title: 'Ready for release',
      taskIds: ['task-4']
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
}

export default initialData;