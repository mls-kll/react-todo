import React from "react";

const Todo = ({ name, isCompleted, handleComplete, removeTodo }) => {
  return (
    <li className='list-group-item todo-list-item'>
      <span className={isCompleted ? 'complete' : 'uncomplete'} onClick={handleComplete}>{name}</span>
      <button className='btn btn-danger ml-5' onClick={removeTodo}> remove</button>
    </li>
  );
};

export default Todo;
