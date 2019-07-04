import React from 'react';

const EditTodo = ({title, description}) => {
  return (
    <form className='edit-todo-form border rounded bg-light'>
      <div>
        <div className='edit-field mb-2'>
          <span>title</span>
          <input type="text"  value={title}/>
        </div>
        <div className='edit-field'>
          <span>description</span>
          <textarea type="text"  value={description}/>
        </div>
      </div>
      <button className='btn btn-warning'>save</button>
    </form>
  );
};

export default EditTodo;
