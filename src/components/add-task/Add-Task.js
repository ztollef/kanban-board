import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';

const AddTask = ({ addTask }) => {
    const [taskId, setTaskId] = useState('');
    const [taskOwner, setTaskOwner] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [taskTitle, setTaskTitle] = useState('');
    const [taskType, setTaskType] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newTaskId = taskTitle;
        setTaskId(newTaskId);
        if (!taskId || !taskDetails || !taskOwner) return;
        addTask(taskId, taskTitle, taskDetails, taskPriority, taskOwner, taskType);
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
                placeholder="Title"
            />
            <input 
                type="text" 
                value={taskDetails}
                onChange={e => setTaskDetails(e.target.value)}
                placeholder="Details"
            />
            <input 
                type="text" 
                value={taskPriority}
                onChange={e => setTaskPriority(e.target.value)}
                placeholder="Priority"
            />
            <input 
                type="text" 
                value={taskOwner}
                onChange={e => setTaskOwner(e.target.value)}
                placeholder="Owner"
            />
            
            <input 
                type="text" 
                value={taskType}
                onChange={e => setTaskType(e.target.value)}
                placeholder="Type (bug, enhancement, other"
            />
            <div>
                <button type="submit">Add Task</button>
                <input type="reset" />
            </div>
        </form>
    )
}

export default AddTask;
