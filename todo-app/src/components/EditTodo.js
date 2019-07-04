import React from 'react';

const EditTodo = ({ title, description, submitEdit, descriptionRef }) => {
  return (
    <form
      className="edit-todo-form border rounded bg-light"
      onSubmit={submitEdit}
    >
      <div>
        <div className="edit-field mb-2">
          <span>title</span>
          <input type="text" />
        </div>
        <div className="edit-field">
          <span>description</span>
          <textarea type="text" ref={descriptionRef} />
        </div>
      </div>
      <button className="btn btn-warning">save</button>
    </form>
  );
};

export default EditTodo;
