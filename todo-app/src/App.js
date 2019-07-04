import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import { removeTodo, completeTodo, addTodo } from './actions/index';

const App = ({ todos, error, errorMessage, deleteTodo, completeTodo, addTodo }) => {
  let todoInput;
  return (
    <div className="App">
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(todoInput.value);
        }}
      >
        <input type="text" ref={node => (todoInput = node)} />
        <button>add todo</button>
      </form>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          name={todo.name}
          isCompleted={todo.isCompleted}
          handleComplete={() => completeTodo(todo.id)}
          removeTodo={() => deleteTodo(todo.id)}
        />
      ))}
      {error && <div>{errorMessage}</div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.isError,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(removeTodo(id)),
  completeTodo: id => dispatch(completeTodo(id)),
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);