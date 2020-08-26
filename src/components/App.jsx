import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";

export default class App extends React.Component {
  constructor(props){  
    super(props)
    this.state={
      items:[
        {id:0, text:"create a website",done:true},
        {id:1, text:"create a problem",done:true},
        {id:2, text:"create a possibility",done:true},
        {id:3, text:"create nothing ",done:true},
        {id:4, text:"walk the dog",done:false},
        {id:5, text:"walk the cat",done:false},
        {id:6, text:"walk the tiger",done:false},
        {id:7, text:"walk the lion",done:false},

      ]
    }
  }
  upDateItem=(id)=>{
    const upDatedItems=this.state.items.map(item=>{
      if(item.id===id){
        item.done= !item.done
        return item
      }else{
        return item
      }
    })
    this.setState({
      items:upDatedItems
    })

  }

  addItem =(inputText)=>{
    const item={
      id:this.state.items.length,
      text:inputText,
      done:false
    }
    this.setState(
      {items:[...this.state.items, item]}
    )


  }
  render (){
    const toDones=this.state.items.filter(item=>item.done===true)
    const toDos=this.state.items.filter(item=>item.done===false)

    return(
    <div className="app">
      <Navigation/>
      <ToDosContainer updateitemProps={this.upDateItem} toDosProps={toDos} addItemProps={this.addItem}/>
      <ToDonesContainer updateitemProps={this.upDateItem} toDoneProps={toDones}/>
    </div>
    )
}

}
