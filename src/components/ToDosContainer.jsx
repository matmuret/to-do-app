import React from 'react'
import ToDoItem from './ToDoItem';


export default class toDosContainer extends React.Component {  
    state = {
         inputText:""
    }
    formSubmit=(e)=>{
        e.preventDefault()
        if(this.state.inputText.trim() !==""){
        this.props.addItemProps(this.state.inputText)
        }
    }
    
    
    render(){
        const todosItem=this.props.toDosProps.map(task=>{
        return (
            <ToDoItem updateitemProps={this.props.updateitemProps} taskProp={task}/>
        );
    })

   
    
    return (
        <div className="todos-container">
         <form className="todo-form" onSubmit={this.formSubmit}>
             <label className="input-item">
                 <input type="text" name="todo" onChange={e=>this.setState({inputText:e.target.value})}/>
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
}