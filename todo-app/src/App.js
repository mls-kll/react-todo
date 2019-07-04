import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todo from './components/Todo';

const App = ({todos}) => {
  return (
    <div className="App">
      <form>
        <input type="text" />
        <button>add todo</button>
      </form>
      {todos.map(todo => (
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
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);

/* return (
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
    {this.state.isError && <div>{this.state.errorMessage}</div>}
  </div>
); */

/* constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 0, name: 'todo 1', isCompleted: false },
        { id: 1, name: 'todo 2', isCompleted: false },
        { id: 2, name: 'todo 3', isCompleted: false } 
      ],
      newTodo: '',
      isError: false,
      errorMessage: 'your input field is empty'
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
    this.setState({
      newTodo
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.newTodo.length < 1) {
      this.setState({
        isError: true
      });
    } else {
      const allIds = [];
      this.state.todos.forEach(todo => allIds.push(todo.id));
      const newId =
        this.state.todos.length > 0
          ? allIds.reduce((max, num) => (num > max ? num : max)) + 1
          : 0;

      console.log(newId);

      const newTodo = {
        id: newId,
        name: this.state.newTodo,
        isCompleted: false
      };
      const todos = [...this.state.todos, newTodo];

      this.setState({
        isError: false,
        todos,
        newTodo: ''
      });
    }
  };
 */
