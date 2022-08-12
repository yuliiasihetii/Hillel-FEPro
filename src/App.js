import React, { useEffect, useState } from 'react';
import './App.css'
import { API_URL } from './config';
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => setTodos(data))
  }, [])

  function toggleTodo(id) {
    const todo = todos.find(item => item.id === id)
    const updateTodo = { ...todo, isDone: !todo.isDone }

    fetch(API_URL + id, {
      method: 'PUT',
      body: JSON.stringify(updateTodo),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    setTodos(todos.map(item => item.id !== id ? item : updateTodo))
  }

  function deleteTodo(id) {
    const newList = todos.filter(item => item.id !== id);

    setTodos(newList)

    return fetch(API_URL + id, {
      method: 'DELETE',
    })
  }

  function createTodo(newTodo) {
    newTodo = {
      ...newTodo,
      id: Date.now(),
      isDone: false,
    }
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos((prevValue) => [...prevValue, data]);
      });
  }

  return (
    <div>
      <TodoList
        todos={todos}
        OnToggle={toggleTodo}
        OnRemove={deleteTodo}
      />
      <TodoForm onSave={createTodo} />
    </div>
  )
}
export default App;