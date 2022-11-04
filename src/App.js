import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'; 
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([]) 

  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete 
    setTodos(newTodos)
   }

  function handleAddTodo(eventProp) {
    
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <TodoList todosShow={todos} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text" placeholder="Add a new to-do..." />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodo}>Clear Todos</button>
    <div>You have {todos.filter(todo => !todo.complete).length} Todos left to do!</div>
    </>
  )  
}

export default App;
