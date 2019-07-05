import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDescription, editTitle } from '../actions/index';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.todo.title,
      description: props.todo.description
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, title, description } = this.state;

    description.length > 1
      ? this.props.addDescription(id, description)
      : console.log('error');
    description.length > 1
      ? this.props.editTitle(id, title)
      : console.log('error');
  };

  render() {
    const { title, description } = this.state;
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
                onChange={event => this.handleChange(event)}
                type="text"
                value={title}
              />
            </div>
            <div className="edit-field">
              <span>description</span>
              <textarea
                name="description"
                onChange={this.handleChange}
                type="text"
                value={description}
              />
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
  }
}

const mapStateToProps = state => {
  return {
    error: state.isError,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  addDescription: (id, description) =>
    dispatch(addDescription(id, description)),
  editTitle: (id, title) => dispatch(editTitle(id, title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
