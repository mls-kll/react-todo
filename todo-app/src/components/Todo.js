import React from 'react';
import EditTodo from './EditTodo';

const Todo = ({
  title,
  isCompleted,
  handleComplete,
  removeTodo,
  showEdit,
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
        <span className='todo-title' onClick={displayEditField}>{title}</span>
        <button className="btn btn-danger ml-5 mb-2" onClick={removeTodo}>
          remove
        </button>
      </div>
      {showEdit && (
        <EditTodo
          title={title}
          description={description}
          submitEdit={submitEdit}
          descriptionRef={descriptionRef}
          titleRef={titleRef}
        />
      )}
    </li>
  );
};

export default Todo;
