import React, { useState, useEffect } from 'react';
import AddItem from '../componets/AddItem';
import List from '../componets/List';
import Navbar from '../componets/Navbar';

const Todo = () => {
  let [todos, setTodos] = useState([{ id: 1, title: 'sad' }]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=25')
      .then(resp => resp.json())
      .then(todos => setTodos(todos));
  }, []);

  const CreatePost = newPost => {
    setTodos([...todos, newPost]);
  };

  const RemovePost = post => {
    setTodos(todos.filter(t => t.id !== post.id));
  };

  const donePost = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.marker = !todo.marker;
        }
        return todo;
      })
    );
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='App-main'>
        <AddItem create={CreatePost} />
        {todos.length ? (
          <List todos={todos} remove={RemovePost} done={donePost} />
        ) : (
          <div>Ура</div>
        )}
      </div>
    </div>
  );
};

export default Todo;
