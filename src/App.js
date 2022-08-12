import './App.css';
import React, { useEffect, useState } from 'react';
import { API_URL } from './config';
import UserList from './UserList';
import UserForm from './UserForm';
import {
  createUser as apiCreateUser,
  removeUser as apiRemoveUser,
  updatedUser as apiUpdatedUser,
  getUsersList,
} from './api';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {

    getUsersList()
      .then((data) => {
        setList(data);
      })
  }, []);

  function removeTodo(id) {


    const newList = list.filter((item) => item.id !== id);

    setList(newList);

    return apiRemoveUser(id);

  }

  function createUser(newUser) {

    newUser = {
      ...newUser,
      id: Date.now(),
    };

    apiCreateUser(newUser).then((data) => {
      setList((prevValue) => [...prevValue, data]);
    });
  }

  return (<>
    <UserList
      list={list}
      onRemove={removeTodo} />
    <UserForm onSave={createUser} />
  </>
  );
}

export default App;
