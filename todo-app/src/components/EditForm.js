import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEditTodo, setError } from '../actions/index';
import InputError from './InputError';
import Discard from './Discard';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: ''
    };
  }

  componentDidMount() {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
    const todo = localStorageTodos.filter(todo => todo.id === this.props.id)[0];

    this.setState({
      id: todo.id,
      title: todo.title,
      description: todo.description
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, title, description } = this.state;
    const { setError, startEditTitle, startEditTodo, history } = this.props;

    if (title.length < 1) {
      setError();
    } else {
      startEditTodo(id, title, description);
      history.push('/');
    }
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
            <Discard />
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
  startEditTodo: (id, title, description) =>
    dispatch(startEditTodo(id, title, description)),
  setError: () => dispatch(setError())
});

const EditFormWithRouter = withRouter(EditForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFormWithRouter);
