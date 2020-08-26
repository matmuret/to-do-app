import React from 'react'

export default function ToDoItem({taskProp, updateitemProps}) {
    return (
        <div className="todo-item">
        <p>{taskProp.text}</p>
        <div className="action">
                                             {/*we use the arrow function cause we can not call a function directly but just the refewrence */}
            <button className="btn" onClick={()=>updateitemProps(taskProp.id)}>&#10004;</button>
        </div>
    </div>
    );
}
