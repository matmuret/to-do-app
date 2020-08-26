import React from 'react'

export default function ToDoneItem({taskProp,updateitemProps}) {
    return (
        <div className="todones-item">
                <p>{taskProp.text}</p>
                <div className="action">
                    <button className="btn" onClick={()=>updateitemProps(taskProp.id)} >&#10004;</button>
                </div>
            </div>
    )
}
