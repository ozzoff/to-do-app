import React from "react";
import  ReactDOM  from "react-dom"
import "./main.css"

import Card from "./box"

function App(){
  let[todos,settodos]=React.useState([])
  let[search,setsearch]=React.useState("")


  function handleChange(e){
    setsearch(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault()
    settodos(prev=>[...prev,{task:search,completed:false,id:crypto.randomUUID()}])
    
  }
  

  function deleteTodo(id){
    settodos(prev=>{
      return prev.filter(t => t.id !== id)
    })

  }
  
  function ToggleBox(id,completed){
    settodos(current=>{
      return current.map(todo=>{
        if(todo.id===id){
          return{...todo,completed}

        }
        
        return todo
      })
    })
  }
  return(
    <div>
      <h1>TO DO APP</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Enter task"></input>
        <button>Add</button>
      </form>

      <div className="todo-container">
        {todos.map(map=>(
        <div className="task" key={map.id}>
          <input type="checkbox" checked={map.completed} onChange={e=>ToggleBox(map.id,e.target.checked)}></input>
          <h2 style={map.completed ? {color:"grey", textDecoration:"line-through"} : {color:"black"}}>{map.task}</h2>
          <button onClick={()=>deleteTodo(map.id)}>Delete</button>
        </div>
        ))}
      </div>
      
    </div>
   
    
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))