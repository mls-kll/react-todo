import React from 'react';

const EditTodo = ({
  title,
  description,
  titleRef,
  descriptionRef,
  submitEdit
}) => {
  return (
    <form
      className="edit-todo-form border rounded bg-light"
      onSubmit={submitEdit}
    >
      <div>
        <div className="edit-field mb-2">
          <span>title</span>
          <input type="text" defaultValue={title} ref={titleRef} />
        </div>
        <div className="edit-field">
          <span>description</span>
          <textarea
            type="text"
            defaultValue={description}
            ref={descriptionRef}
          />
        </div>
      </div>
      <button className="btn btn-warning">save</button>
    </form>
  );
};

export default EditTodo;
