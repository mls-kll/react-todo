import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {
  startRemoveTodo,
  startCompleteTodo,
  startInitializeTodos,
  resetFilter
} from '../actions/index';
import { Link } from 'react-router-dom';
import InputError from './InputError';
import SearchBox from './SearchBox';

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

  render() {
    const {
      startRemoveTodo,
      startCompleteTodo,
      filteredTodos,
      todos
    } = this.props;
    return (
      <div className="Main">
        <div className="todo-wrapper border rounded">
          <SearchBox />
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
    hasFiltered: state.filters.hasFiltered,
    timer: state.helpers.timer,
    isSuggesting: state.filters.isSuggesting
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveTodo: id => dispatch(startRemoveTodo(id)),
  startCompleteTodo: id => dispatch(startCompleteTodo(id)),
  startInitializeTodos: () => dispatch(startInitializeTodos()),
  resetFilter: () => dispatch(resetFilter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
