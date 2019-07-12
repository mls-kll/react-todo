import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  startEditTodo,
  setError,
  resetError,
  handleEditTitle,
  handleEditDescription
} from '../actions/index';
import InputError from './InputError';
import Discard from './Discard';

class EditForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const {
      setError,
      resetError,
      isError,
      startEditTodo,
      history,
      updatedTitle,
      updatedDescription,
      todo
    } = this.props;

    const newTitle = updatedTitle !== null ? updatedTitle : todo.title;

    if (updatedTitle === '') {
      setError();
    } else {
      startEditTodo(todo.id, newTitle, updatedDescription);
      !isError && resetError();
      history.push('/');
    }
  };

  render() {
    const { title, description } = this.props.todo;
    const { handleEditTitle, handleEditDescription } = this.props;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="edit-todo-form border rounded bg-light"
        >
          <div>
            <div className="edit-field mb-2">
              <span>title</span>
              <input
                name="title"
                onChange={event => handleEditTitle(event.target.value)}
                type="text"
                defaultValue={title}
              />
            </div>
            <div className="edit-field">
              <span>description</span>
              <textarea
                name="description"
                onChange={event => handleEditDescription(event.target.value)}
                type="text"
                defaultValue={description}
              />
            </div>
          </div>
          <div className="edit-button-container mt-3">
            <button className="btn btn-warning">save</button>
            <Discard />
          </div>
        </form>
        {this.props.error && <InputError errorMessage="title field is empty" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.errors.isError,
    todos: state.todos.todos,
    updatedTitle: state.helpers.updatedTitle,
    updatedDescription: state.helpers.updatedDescription
  };
};

const mapDispatchToProps = dispatch => ({
  startEditTodo: (id, title, description) =>
    dispatch(startEditTodo(id, title, description)),
  setError: () => dispatch(setError()),
  resetError: () => dispatch(resetError()),
  handleEditTitle: updatedTitle => dispatch(handleEditTitle(updatedTitle)),
  handleEditDescription: updatedDescription =>
    dispatch(handleEditDescription(updatedDescription))
});

const EditFormWithRouter = withRouter(EditForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFormWithRouter);
