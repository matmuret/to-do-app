import React from 'react'

export default function ToDonesContainer() {

    const todones=[
        {text:"create a website",done:true},
        {text:"create a problem",done:true},
        {text:"create a possibility",done:true},
        {text:"create nothing ",done:true},
    ]
    const toDonesItem=todones.map(task=>{
        return (
            <div className="todones-item">
                <p>{task.text}</p>
                <div className="action">
                    <button className="btn">&#10004;</button>
                </div>
            </div>
        )
    });   
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDonesItem}

        </div>
    )
}
