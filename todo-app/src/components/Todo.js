import React from "react";

const Todo = ({ name, isCompleted, handleComplete, removeTodo }) => {
  return (
    <div>
      <span className={isCompleted ? 'complete' : 'uncomplete'} onClick={handleComplete}>{name}</span>
      <span onClick={removeTodo}> remove</span>
    </div>
  );
};

export default Todo;
