import { useState } from "react";
import React from 'react';

const AddTask = ({ addTask }) => {
    const [taskId, setTaskId] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
    const [taskOwner, setTaskOwner] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!taskId || !taskDetails || !taskOwner) return;
        addTask(taskId, taskDetails, taskOwner)
    };
  
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input 
                type="text" 
                value={taskId}
                onChange={e => setTaskId(e.target.value)}
                placeholder="Task Title"
            />
            <input 
                type="text" 
                value={taskDetails}
                onChange={e => setTaskDetails(e.target.value)}
                placeholder="Task Details"
            />
            <input 
                type="text" 
                value={taskOwner}
                onChange={e => setTaskOwner(e.target.value)}
                placeholder="Task Owner"
            />
            <div>
                <button type="submit">Add Task</button>
                <input type="reset" />
            </div>
        </form>
    )
}

export default AddTask;
