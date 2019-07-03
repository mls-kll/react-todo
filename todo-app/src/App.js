import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, name: 'todo 1', isCompleted: false },
        { id: 2, name: 'todo 2', isCompleted: false },
        { id: 3, name: 'todo 3', isCompleted: false }
      ],
      newTodo: ''
    };
  }

  handleComplete = id => {
    const changedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    this.setState({
      todos: changedTodos
    });
  };

  handleDelete = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    console.log(todos);
    this.setState({
      todos
    });
  };

  handleChange = event => {
    const newTodo = event.target.value;
    console.log(newTodo);
    this.setState({
      newTodo
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random()),
      name: this.state.newTodo,
      isCompleted: false
    };
    const todos = [...this.state.todos, newTodo];

    this.setState({
      todos,
      newTodo: ''
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button>add todo</button>
        </form>
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            handleComplete={() => this.handleComplete(todo.id)}
            removeTodo={() => this.handleDelete(todo.id)}
          />
        ))}
      </div>
    );
  }
}

export default App;
