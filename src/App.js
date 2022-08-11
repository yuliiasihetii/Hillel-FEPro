import React, { Component } from 'react';
import './App.css'

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        tittle: 'Swimming',
        isDone: true
      },
      {
        id: 2,
        tittle: 'Tennis',
        isDone: false
      },
      {
        id: 3,
        tittle: 'Gym',
        isDone: true
      }, {
        id: 4,
        tittle: 'Dancing',
        isDone: true
      }
    ]
  }
  render() {
    return (<>
      <TodoList
        list={this.state.list}
        onToggle={this.toggleTodo} />
      <TodoForm onSave={this.createTodo} />
    </>)
  }

  toggleTodo = (todoId) => {
    const todoItem = this.state.list.find(({ id }) => id == todoId);

    this.setState({
      list: this.state.list.map((item) =>
        item.id === todoId ? { ...todoItem, isDone: !todoItem.isDone } : item,
      ),
    });
  }

  createTodo = (newTodo) => {
    this.setState({
      list: [...this.state.list, { ...newTodo, id: Date.now() }],
    });
  }
}
