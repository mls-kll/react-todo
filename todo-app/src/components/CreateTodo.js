import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTodo, setError } from '../actions/index';

const CreateTodo = ({ addTodo, setError }) => {
  let titleInput;
  let descriptionInput;
  return (
    <div>
      <form
        className="edit-todo-form border rounded bg-light"
        onSubmit={event => {
          event.preventDefault();
          titleInput.value.length < 1
            ? setError()
            : addTodo(titleInput.value, descriptionInput.value);
          titleInput.value = '';
        }}
      >
        <div className="edit-field mb-2">
          <span>title</span>
          <input type="text" ref={node => (titleInput = node)} />
        </div>
        <div className="edit-field mb-2">
          <span>description</span>
          <input type="text" ref={node => (descriptionInput = node)} />
        </div>
        <div className="edit-button-container mt-3">
          <button className="btn btn-primary ml-5 mb-1">add todo</button>
          <Link className="btn btn-secondary" to="/">
            discard
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.isError
  };
};

const mapDispatchToProps = dispatch => ({
  addTodo: (title, description) => dispatch(addTodo(title, description)),
  setError: () => dispatch(setError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
