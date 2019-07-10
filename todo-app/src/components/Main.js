import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {
  startRemoveTodo,
  startCompleteTodo,
  startInitializeTodos
} from '../actions/index';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filteredTodos: [],
      query: ''
    };
  }

  componentDidMount() {
    const { reduxTodos, startInitializeTodos } = this.props;
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));

    reduxTodos.length < 1 && localStorageTodos && startInitializeTodos();

    localStorageTodos &&
      this.setState(prevState => ({
        todos: [...prevState.todos, ...localStorageTodos],
        filteredTodos: [...prevState.filteredTodos, ...localStorageTodos]
      }));
  }

  componentDidUpdate(prevProps) {
    const newProps = this.props;
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));

    newProps !== prevProps &&
      this.setState({
        todos: localStorageTodos
      });
  }

  handleChange = event => {
    const query = event.target.value.toLowerCase();

    this.setState({
      [event.target.name]: query
    });
    this.state.query.length > -1
      ? this.setState({
          filteredTodos: this.state.todos.filter(todo =>
            todo.title.includes(query)
          )
        })
      : this.setState({ filteredTodos: this.state.todos });
  };

  render() {
    const { startRemoveTodo, startCompleteTodo } = this.props;
    const { todos, query, filteredTodos } = this.state;

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
            {filteredTodos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                handleComplete={() => startCompleteTodo(todo.id)}
                removeTodo={() => startRemoveTodo(todo.id)}
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
    reduxTodos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveTodo: id => dispatch(startRemoveTodo(id)),
  startCompleteTodo: id => dispatch(startCompleteTodo(id)),
  startInitializeTodos: () => dispatch(startInitializeTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
