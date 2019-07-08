import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDescription, editTitle, setError } from '../actions/index';
import InputError from './InputError';

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

    this.props.addDescription(id, description);

    title.length < 1 ? this.props.setError() : this.props.editTitle(id, title);
    this.props.history.push('/');
  };

  render() {
    const { title, description } = this.state;
    return (
      <div>
        {console.log(this.props)}
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
        {this.props.error && <InputError />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.isError
  };
};

const mapDispatchToProps = dispatch => ({
  addDescription: (id, description) =>
    dispatch(addDescription(id, description)),
  editTitle: (id, title) => dispatch(editTitle(id, title)),
  setError: () => dispatch(setError())
});

const EditFormWithRouter = withRouter(EditForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFormWithRouter);
