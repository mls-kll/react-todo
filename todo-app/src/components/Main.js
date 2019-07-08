import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo, completeTodo } from '../actions/index';
import { Link } from 'react-router-dom';

const Main = ({ todos, removeTodo, completeTodo }) => {
  return (
    <div className="Main">
      <div className="todo-wrapper border rounded">
        <div className="add-todo-icon-container">
          <Link to="/create">
            <i className="create-todo fas fa-plus text-primary" />
          </Link>
        </div>

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
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  completeTodo: id => dispatch(completeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
