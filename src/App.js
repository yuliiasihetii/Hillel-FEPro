import './App.css';

import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { API_URL } from './config';

export default class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.fetchList();
  }

  render() {
    return (<>
      <UserList
        list={this.state.list}
        onRemove={this.removeTodo} />
      <UserForm onSave={this.createUserData} />
    </>)
  }

  fetchList() {
    return fetch(API_URL)
      .then((res) => res.json()
        .then((data) => this.setState({ list: data })))
  }

  removeTodo = (id) => {
    const newList = this.state.list.filter((item) => item.id !== id);

    this.setState({
      list: newList,
    });

    return fetch(API_URL + id, {
      method: 'DELETE',
    })
  }

  createUserData = (newUser) => {

    newUser = {
      ...newUser,
      id: Date.now(),
    }
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ list: [...this.state.list, data], });
      });

  }
}
