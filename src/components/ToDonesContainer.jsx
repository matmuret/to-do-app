import React from 'react'
import ToDoneItem from "./ToDoneItem"

export default function ToDonesContainer(prop) {

    
    const toDonesItem=prop.toDoneProps.map(task=>{
        return (
            <ToDoneItem updateitemProps={prop.updateitemProps} taskProp={task}/>
        )
    });   
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDonesItem}

        </div>
    )
}
