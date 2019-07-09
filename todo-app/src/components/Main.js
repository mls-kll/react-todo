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
      todos: []
    };
  }

  componentDidMount() {
    const { reduxTodos, startInitializeTodos } = this.props;
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));

    reduxTodos.length < 1 && localStorageTodos && startInitializeTodos();

    localStorageTodos &&
      this.setState(prevState => ({
        todos: [...prevState.todos, ...localStorageTodos]
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

  render() {
    const { startRemoveTodo, startCompleteTodo } = this.props;
    const { todos } = this.state;

    return (
      <div className="Main">
        <div className="todo-wrapper border rounded">
          <hr />
          <div className="add-todo-icon-container">
            <Link to="/create">
              <i className="create-todo fas fa-plus text-primary" />
            </Link>
          </div>
          <ul className="list-group list-group-flush">
            {todos.map(todo => (
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
