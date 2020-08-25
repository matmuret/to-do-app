import React from 'react'


export default function toDosContainer() {

    const todos = [
        {text:"walk the dog",done:false},
        {text:"walk the cat",done:false},
        {text:"walk the tiger",done:false},
        {text:"walk the lion",done:false},

    ]
    const todosItem=todos.map(task=>{
        return (
            <div className="todo-item">
                <p>{task.text}</p>
                <div className="action">
                    <button className="btn">&#10004;</button>
                </div>
            </div>
        )
    });
    return (
        <div className="todos-container">
         <form className="todo-form">
             <label className="input-item">
                 <input type="text" name="todo"/>
             </label>
             <input type="submit" className="btn" value="ADD"/>
         </form>
        <div className="todos">
        <h3>TO DO</h3>
        {todosItem}
        </div>
       </div>
    )
}
