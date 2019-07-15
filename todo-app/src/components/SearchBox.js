import React from 'react';
import { connect } from 'react-redux';
import Suggestions from './Suggestions';
import {
  startFilterTodos,
  handleTimeout,
  startGetSuggestions,
  resetSuggestion,
  setQuery
} from '../actions/index';

class SearchBox extends React.Component {
  handleChange = event => {
    let query = event.target.value;
    const {
      handleTimeout,
      timer,
      startFilterTodos,
      startGetSuggestions,
      setQuery
    } = this.props;
    setQuery(query);
    timer && clearTimeout(timer);

    handleTimeout(
      setTimeout(() => {
        startFilterTodos(query);
        startGetSuggestions(query);
      }, 500)
    );
  };

  handleBlur = () => {
    const { resetSuggestion } = this.props;
    setTimeout(() => {
      resetSuggestion();
    }, 300);
  };

  render() {
    const { filterQuery, isSuggesting } = this.props;
    return (
      <div className="search-box ml-3 mt-3">
        <div>
          <input
            className="search-input"
            autoComplete="off"
            type="text"
            name="query"
            onChange={event => this.handleChange(event)}
            onBlur={this.handleBlur}
            value={filterQuery}
          />
          <i className="fas fa-search ml-5" />
        </div>
        <Suggestions />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSuggesting: state.filters.isSuggesting,
    timer: state.helpers.timer,
    filterQuery: state.filters.query
  };
};

const mapDispatchToProps = dispatch => ({
  startFilterTodos: query => dispatch(startFilterTodos(query)),
  handleTimeout: timer => dispatch(handleTimeout(timer)),
  startGetSuggestions: query => dispatch(startGetSuggestions(query)),
  resetSuggestion: () => dispatch(resetSuggestion()),
  setQuery: query => dispatch(setQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
