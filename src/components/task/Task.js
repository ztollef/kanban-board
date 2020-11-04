import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './task.css';

const Task = (props) => {

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className={`task-container ${snapshot.isDragging ? 'active-task' : ''}`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
                >
                    <h4>{props.task.title}</h4>
                    <p>{props.task.content}</p>
                    <p><span style={{fontWeight: "bold"}}>Priority</span>: {props.task.priority}</p>
                    <p><span style={{fontWeight: "bold"}}>Owner</span>: {props.task.owner}</p>
                    <p><span style={{fontWeight: "bold"}}>Type</span>: {props.task.type}</p>
                </div>
            )
            }
        </Draggable>
    )
}

export default Task;
