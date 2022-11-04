import React from 'react'
import TodoComponent from './TodoComponent'

export default function TodoList({ todosShow, toggleTodo }) {
  return (
    todosShow.map(todoValue => {
        return <TodoComponent key={todoValue.id} toggleTodo={toggleTodo} todoValue={todoValue} />
    })
  )
}
