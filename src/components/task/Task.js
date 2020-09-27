import React, {useState} from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './task.css'

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className={`task-container ${snapshot.isDragging ? 'active-task' : ''}`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps} 
                >
                {props.task.content}
                </div>
            )
            }
        </Draggable>
    )
}

export default Task;
