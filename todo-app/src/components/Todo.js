import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedTodo } from '../actions/index';

const Todo = ({
  title,
  isCompleted,
  handleComplete,
  removeTodo,
  id,
  setSelectedTodo
}) => {
  return (
    <li className="list-group-item">
      <div className="todo-list-item">
        <span>
          <i
            onClick={handleComplete}
            className={
              isCompleted
                ? 'todo-icon fas fa-check-circle text-success'
                : 'todo-icon far fa-circle'
            }
          />
        </span>
        <Link to={`todo/edit/${id}`} onClick={() => setSelectedTodo(id)}>
          <span className="todo-title">{title}</span>
        </Link>
        <button className="btn btn-danger ml-5 mb-2" onClick={removeTodo}>
          remove
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  setSelectedTodo: id => dispatch(setSelectedTodo(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Todo);
