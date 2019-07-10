import React from 'react';
import { connect } from 'react-redux';
import InputError from './InputError';
import Discard from './Discard';

import { startAddTodo, setError } from '../actions/index';

const CreateTodo = ({ history, startAddTodo, setError, error }) => {
  let titleInput;
  let descriptionInput;
  return (
    <div>
      <form
        className="edit-todo-form border rounded bg-light"
        onSubmit={event => {
          event.preventDefault();
          if (titleInput.value.length < 1) {
            setError();
          } else {
            startAddTodo(titleInput.value, descriptionInput.value);
            history.push('/');
          }
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
          <Discard />
        </div>
      </form>
      {error && <InputError errorMessage='Title field is empty'/>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.isError
  };
};

const mapDispatchToProps = dispatch => ({
  startAddTodo: (title, description) =>
    dispatch(startAddTodo(title, description)),
  setError: () => dispatch(setError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
