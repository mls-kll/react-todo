import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({
  title,
  isCompleted,
  handleComplete,
  removeTodo,
  id,
  displayEditField,
  description,
  submitEdit,
  descriptionRef,
  titleRef
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
        <Link to={`todo/edit/${id}`}>
        <span className="todo-title">
          {title}
        </span>
        </Link>
        <button className="btn btn-danger ml-5 mb-2" onClick={removeTodo}>
          remove
        </button>
      </div>

      {/*  <EditTodo
          title={title}
          description={description}
          submitEdit={submitEdit}
          descriptionRef={descriptionRef}
          titleRef={titleRef}
        /> */}
    </li>
  );
};

export default Todo;
