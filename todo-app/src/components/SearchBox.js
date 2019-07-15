import React from 'react';
import { connect } from 'react-redux';
import Suggestions from './Suggestions';
import {
  startFilterTodos,
  handleTimeout,
  startGetSuggestions
} from '../actions/index';

class SearchBox extends React.Component {
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
    return (
      <div className="search-box">
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
        <Suggestions />
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
  startFilterTodos: query => dispatch(startFilterTodos(query)),
  handleTimeout: timer => dispatch(handleTimeout(timer)),
  startGetSuggestions: query => dispatch(startGetSuggestions(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
