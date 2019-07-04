import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import { removeTodo, completeTodo, addTodo, showEdit } from './actions/index';

const App = ({
  todos,
  error,
  errorMessage,
  removeTodo,
  completeTodo,
  addTodo,
  displayEditField
}) => {
  let todoInput;
  return (
    <div className="App">
      <div className="todo-wrapper border rounded">
        <form
          onSubmit={event => {
            event.preventDefault();
            addTodo(todoInput.value);
            todoInput.value = '';
          }}
        >
          <input type="text" ref={node => (todoInput = node)} />
          <button className="btn btn-primary ml-5 mb-1">add todo</button>
        </form>
        <ul className="list-group list-group-flush">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              handleComplete={() => completeTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
              showEdit={todo.showEdit}
              displayEditField={() => displayEditField(todo.id)}
            />
          ))}
        </ul>
        {error && <div className="alert alert-danger">{errorMessage}</div>}
      </div>
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
  removeTodo: id => dispatch(removeTodo(id)),
  completeTodo: id => dispatch(completeTodo(id)),
  addTodo: todo => dispatch(addTodo(todo)),
  displayEditField: id => dispatch(showEdit(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
