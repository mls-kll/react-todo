import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setError } from '../actions/index';

const EditForm = ({ todo }) => {
  /*  console.log('todo', todo); */
  return (
    <div>
      <form className="edit-todo-form border rounded bg-light">
        <div>
          <div className="edit-field mb-2">
            <span>title</span>
            <input type="text" defaultValue={todo.title} />
          </div>
          <div className="edit-field">
            <span>description</span>
            <textarea type="text" defaultValue={todo.description} />
          </div>
        </div>
        <div className="edit-button-container mt-3">
          <button className="btn btn-warning">save</button>
          <Link className="btn btn-secondary" to="/">
            discard
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setError: () => dispatch(setError())
});

export default connect(
  undefined,
  mapDispatchToProps
)(EditForm);
