import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {
  startRemoveTodo,
  startCompleteTodo,
  startInitializeTodos,
  startFilterTodos,
  resetFilter,
  handleTimeout,
  startGetSuggestions
} from '../actions/index';
import { Link } from 'react-router-dom';
import InputError from './InputError';

class Main extends React.Component {
  componentDidMount() {
    const {
      hasLoaded,
      startInitializeTodos,
      hasFiltered,
      resetFilter
    } = this.props;

    !hasLoaded && startInitializeTodos();
    hasFiltered && resetFilter();
  }

  handleChange = event => {
    let query = event.target.value;
    const {
      handleTimeout,
      timer,
      startFilterTodos,
      startGetSuggestions
    } = this.props;

    timer && clearTimeout(timer);

    handleTimeout(
      setTimeout(() => {
        startFilterTodos(query);
        startGetSuggestions(query);
      }, 500)
    );
  };

  render() {
    const {
      startRemoveTodo,
      startCompleteTodo,
      filteredTodos,
      suggestedTodos,
      todos
    } = this.props;
    return (
      <div className="Main">
        <div className="todo-wrapper border rounded">
          <div>
            <div>
              <input
                className="search-input"
                autoComplete="off"
                type="text"
                name="query"
                onChange={event => this.handleChange(event)}
              />
              <i className="fas fa-search ml-2" />
            </div>
            <ul className="search-suggestions">
              {suggestedTodos &&
                suggestedTodos.map((suggestion, index) => (
                  <li key={index} className="suggestion">
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>

          <hr />
          <div className="add-todo-icon-container">
            <Link to="/create">
              <i className="create-todo fas fa-plus text-primary" />
            </Link>
          </div>
          {
            <ul className="list-group list-group-flush">
              {(filteredTodos || todos).map(todo => (
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
          }
          {filteredTodos && filteredTodos.length < 1 && (
            <InputError errorMessage="todo not found" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos,
    hasLoaded: state.todos.hasLoaded,
    filteredTodos: state.filters.filteredTodos,
    suggestedTodos: state.filters.suggestedTodos,
    hasFiltered: state.filters.hasFiltered,
    timer: state.helpers.timer
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveTodo: id => dispatch(startRemoveTodo(id)),
  startCompleteTodo: id => dispatch(startCompleteTodo(id)),
  startInitializeTodos: () => dispatch(startInitializeTodos()),
  startFilterTodos: query => dispatch(startFilterTodos(query)),
  resetFilter: () => dispatch(resetFilter()),
  handleTimeout: timer => dispatch(handleTimeout(timer)),
  startGetSuggestions: query => dispatch(startGetSuggestions(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
