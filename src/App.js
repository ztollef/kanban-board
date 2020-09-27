import React, {useState, useEffect} from 'react';
import './App.css';
import initialData from './initial-data';
import Column from './components/column/Column';
import {DragDropContext} from 'react-beautiful-dnd';


function App() {

  const [tasks, setTasks] = useState(initialData.tasks);
  const [columns, setColumns] = useState(initialData.columns);
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);
  

  const onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }

  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination ?
      destination.index / Object.keys(tasks).length :
      0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
  }

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

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
 
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...finish, 
        taskIds: newTaskIds,
      }
  
      const newColumns = {
        ...columns,
        [newColumn.id]: newColumn,
      }
      
    setColumns(newColumns);
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

    const newColumns = {
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    };
    setColumns(newColumns)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="columns-container">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const columnTasks = column.taskIds.map(taskId => tasks[taskId]);
          return <Column key={column.id} column={column} tasks={columnTasks} />
        }
        )}
      </div>
    </DragDropContext>
  );
}

export default App;
