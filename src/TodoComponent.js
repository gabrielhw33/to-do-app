import React from 'react'
import './index.css';


export default function TodoComponent({ todoValue, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todoValue.id)
    }
  return (
    <div id="box">
     <label id="cat">

      <input type="checkbox" checked={todoValue.complete} onChange={handleTodoClick}></input> 
      {todoValue.name}

     </label>
    </div>
  )
}
