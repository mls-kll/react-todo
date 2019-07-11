import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {
  startRemoveTodo,
  startCompleteTodo,
  startInitializeTodos,
  filterTodos
} from '../actions/index';
import { Link } from 'react-router-dom';
import InputError from './InputError';

class Main extends React.Component {
  componentDidMount() {
    this.props.todos.length < 1 && this.props.startInitializeTodos();
  }

  render() {
    const {
      startRemoveTodo,
      startCompleteTodo,
      filterTodos,
      query,
      todos
    } = this.props;

    return (
      <div className="Main">
        <div className="todo-wrapper border rounded">
          <div className="m-2">
            <input
              type="text"
              name="query"
              onChange={event => filterTodos(event.target.value)}
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
          {
            <ul className="list-group list-group-flush">
              {todos.map(
                todo =>
                  todo.title.toLowerCase().includes(query.toLowerCase()) && (
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      isCompleted={todo.isCompleted}
                      handleComplete={() => startCompleteTodo(todo.id)}
                      removeTodo={() => startRemoveTodo(todo.id)}
                    />
                  )
              )}
            </ul>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    query: state.filters.query
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveTodo: id => dispatch(startRemoveTodo(id)),
  startCompleteTodo: id => dispatch(startCompleteTodo(id)),
  startInitializeTodos: () => dispatch(startInitializeTodos()),
  filterTodos: query => dispatch(filterTodos(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
