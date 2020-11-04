import React, {useEffect, useState} from 'react';
import './App.css';
import initialData from './initial-data';
import Column from './components/column/Column';
import {DragDropContext} from 'react-beautiful-dnd';

import AddTaskForm from './components/add-task/Add-Task.js';

function App() {

  const [tasks, setTasks] = useState(initialData.tasks);
  const [columns, setColumns] = useState(initialData.columns);

  const onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ?
      destination.index / Object.keys(tasks).length :
      0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  const onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.background= 'inherit';
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = columns.find(column => column.id===source.droppableId);
    const finish = columns.find(column => column.id===destination.droppableId);

    if (start === finish) {
 
      const newTaskIds = start.taskIds;
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumns = [...columns];
    setColumns(newColumns);

    return;
    }

    const startTaskIds = start.taskIds;
    startTaskIds.splice(source.index, 1);

    const finishTaskIds = finish.taskIds;
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newColumns = [...columns];
    setColumns(newColumns);
  };

  const addTask = (id, title, content, priority, owner, type) => {
    const newTask = { id, title, content, priority, owner, type};
    const newTasks = [...tasks, newTask];
    const newColumns = [...columns];
    newColumns[0].taskIds.push(newTask.id);
    console.log(id);
    setTasks(newTasks);
    setColumns(newColumns);
  };

  const deleteTask = taskId => {
    const newTasks = [];
    const newColumns = [];
  };
    
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="columns-container">
        {columns.map(column => {
          const columnTasks = column.taskIds.map(taskId => {
            console.log(tasks);
            return tasks.find(task => task.id===taskId);
          })
          return <Column key={column.id} column={column} tasks={columnTasks}/>
        })}
      </div> 
      <AddTaskForm addTask={addTask}/>
    </DragDropContext>
  );
}
export default App;
