import React from 'react';
import Task from '../task/Task.js';
import {Droppable} from 'react-beautiful-dnd';
import './column.css';

const Column = (props) => {
    return (
        <div className="column-container">
            <div className="column-title">{props.column.title}</div>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => 
                    <div className={`column-tasks ${snapshot.isDraggingOver ? 'active-column' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                        {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} handleChange={props.handleChange} />)}
                        {provided.placeholder}
                    </div>
                }
            </Droppable>
        </div>
    )
}

export default Column;
