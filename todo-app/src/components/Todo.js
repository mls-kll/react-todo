import React from "react";

const Todo = ({ name, isCompleted, handleComplete, removeTodo }) => {
  return (
    <div className={isCompleted ? 'complete' : 'uncomplete'}>
      <span onClick={handleComplete}>{name}</span>
      <span onClick={removeTodo}> remove</span>
    </div>
  );
};

export default Todo;
