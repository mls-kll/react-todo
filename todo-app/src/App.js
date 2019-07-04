import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import {
  removeTodo,
  completeTodo,
  addTodo,
  showEdit,
  addDescription,
  editTitle
} from './actions/index';

const App = ({
  todos,
  error,
  errorMessage,
  removeTodo,
  completeTodo,
  addTodo,
  displayEditField,
  addDescription,
  editTitle
}) => {
  let todoInput;
  let descriptionInput;
  let titleInput;
  return (
    <div className="App">
      <div className="todo-wrapper border rounded">
        <form
          className="todo-main-form bg-light"
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
              description={todo.description}
              isCompleted={todo.isCompleted}
              handleComplete={() => completeTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
              showEdit={todo.showEdit}
              displayEditField={() => displayEditField(todo.id)}
              submitEdit={event => {
                event.preventDefault();
                addDescription(todo.id, descriptionInput.value);
                editTitle(todo.id, titleInput.value);
              }}
              descriptionRef={node => (descriptionInput = node)}
              titleRef={node => (titleInput = node)}
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
  displayEditField: id => dispatch(showEdit(id)),
  addDescription: (id, description) =>
    dispatch(addDescription(id, description)),
  editTitle: (id, title) => dispatch(editTitle(id, title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
