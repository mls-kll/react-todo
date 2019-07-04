import React from 'react';
import EditTodo from './EditTodo';

const Todo = ({ title, isCompleted, handleComplete, removeTodo, showEdit, displayEditField, description, submitEdit, descriptionRef }) => {
  return (
    <li className="list-group-item">
      <div className="todo-list-item">
        <span>
          <i
            onClick={handleComplete}
            className={
              isCompleted
                ? 'fas fa-check-circle text-success'
                : 'far fa-check-circle'
            }
          />
        </span>
        <span onClick={displayEditField}>{title}</span>
        <button className="btn btn-danger ml-5 mb-2" onClick={removeTodo}>
          remove
        </button>
      </div>
      {showEdit && <EditTodo title={title} description={description} submitEdit={submitEdit} descriptionRef={descriptionRef}/>}
    </li>
  );
};

export default Todo;
