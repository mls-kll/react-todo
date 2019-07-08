import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo, completeTodo } from '../actions/index';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      todos: this.props.todos,
      filteredTodos: []
    };
  }

  handleChange = event => {
    const query = event.target.value.toLowerCase();
    this.setState({
      [event.target.name]: query,
      filteredTodos: this.state.todos.filter(todo => todo.title.includes(query))
    });
  };

  render() {
    const { removeTodo, completeTodo } = this.props;
    const { query, filteredTodos } = this.state;

    return (
      <div className="Main">
        <div className="todo-wrapper border rounded">
          <div className="m-2">
            <input
              type="text"
              name="query"
              onChange={event => this.handleChange(event)}
              value={query}
            />
            <i className="fas fa-search ml-2" />
          </div>
          <hr />
          <div className="add-todo-icon-container">
            <Link to="/create">
              <i className="create-todo fas fa-plus text-primary" />
            </Link>
          </div>
          <ul className="list-group list-group-flush">
            {/*filteredTodos.includes(false) ? (
              <div>no resoult found</div>
            ) : (
              filteredTodos
            )*/}

            {filteredTodos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                handleComplete={() => completeTodo(todo.id)}
                removeTodo={() => removeTodo(todo.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  completeTodo: id => dispatch(completeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
