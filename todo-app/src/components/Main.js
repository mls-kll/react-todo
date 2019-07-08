import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import InputError from './InputError';
import { removeTodo, completeTodo, addTodo, setError } from '../actions/index';

const Main = ({
  todos,
  error,
  errorMessage,
  removeTodo,
  completeTodo,
  addTodo,
  setError
}) => {
  let todoInput;

  return (
    <div className="Main">
      <div className="todo-wrapper border rounded">
        <form
          className="todo-main-form bg-light"
          onSubmit={event => {
            event.preventDefault();
            todoInput.value.length < 1 ? setError() : addTodo(todoInput.value);
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
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              handleComplete={() => completeTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
            />
          ))}
        </ul>
        {error && <InputError />}
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
  setError: () => dispatch(setError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
