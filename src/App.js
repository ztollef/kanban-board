import React, {useState} from 'react';
import './App.css';
import initialData from './initial-data';
import Column from './components/column/Column';
import {DragDropContext} from 'react-beautiful-dnd';

import AddTaskForm from './components/add-task/Add-Task.js';

function App() {

  const [state, setState] = useState(initialData);

  const onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  };

  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ?
      destination.index / Object.keys(state.tasks).length :
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

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
 
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...finish, 
        taskIds: newTaskIds,
      };
  
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        }
      };
      
    setState(newState);
    return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    };
    setState(newState);
  };

  const addTask = (taskId, taskDetails, taskOwner ) => {
    const newTask = {
      taskId,
      taskDetails,
      taskOwner,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        
      }
    }
    setState();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="columns-container">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const columnTasks = column.taskIds.map(taskId => state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={columnTasks}/>
        }
        )}
      </div> 
      <AddTaskForm addTask={addTask}/>
    </DragDropContext>
  );
}

export default App;
