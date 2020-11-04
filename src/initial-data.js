import {v4 as uuidv4} from 'uuid';

const initialData = {
  tasks: [
    { id: 'task-1', title: 'JWT authentication bug', content: 'Getting a 404 error', priority: 'High', type: 'bug', owner: 'Zach'},
    { id: 'task-2', title: 'Renew SSL certs', content: 'Use DigiCert for Certificate Authority', priority: 'High', type: 'DevOps', owner: 'Billy' },
    { id: 'task-3', title: 'Update text on homepage', content: 'Refer to email from Beth', priority: 'High', type: 'maintanence', owner: 'Adesh' },
    { id: 'task-4', title: 'Add photo gallery feature', content: 'Add photo gallery feature', priority: 'High', type: 'enhancement', owner: 'Marge' },
],
  columns : [
    { id: 'column-1', title: 'Backlog', taskIds: ['task-1', 'task-3', ] },
    { id: 'column-2', title: 'In progress', taskIds: [] },
    { id: 'column-3', title: 'In review', taskIds: ['task-2']},
    { id: 'column-4', title: 'Ready for release', taskIds: ['task-4']},
  ],
};

export default initialData;