import React from 'react';
import { connect } from 'react-redux';
import {
  startFilterTodos,
  resetSuggestion,
  setQuery,
  handleTimeout,
  startGetSuggestions
} from '../actions/index';
import Autosuggest from 'react-autosuggest';

class Suggestions extends React.Component {
  getSuggestionValue = suggestion => suggestion.title;

  renderSuggestion = suggestion => <span>{suggestion.title}</span>;

  onChange = (event, { newValue, method }) => {
    const { handleTimeout, timer, startFilterTodos, setQuery } = this.props;

    setQuery(newValue);
    timer && clearTimeout(timer);

    handleTimeout(
      setTimeout(() => {
        startFilterTodos(newValue);
      }, 500)
    );
  };

  onSuggestionsFetchRequested = () =>
    this.props.startGetSuggestions(this.props.filterQuery);

  onSuggestionsClearRequested = () => this.props.resetSuggestion();

  render() {
    const { suggestedTodos, filterQuery } = this.props;

    const inputProps = {
      placeholder: 'Type a todo title',
      value: filterQuery,
      onChange: this.onChange
    };
    const suggestions = suggestedTodos ? suggestedTodos : [];
    console.log(suggestedTodos);
    setTimeout(() => {
      console.log('from the timer:', suggestedTodos);
    }, 1000);

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isSuggesting: state.filters.isSuggesting,
    timer: state.helpers.timer,
    filterQuery: state.filters.query,
    todos: state.todos.todos,
    suggestedTodos: state.filters.suggestedTodos
  };
};

const mapDispatchToProps = dispatch => ({
  startFilterTodos: query => dispatch(startFilterTodos(query)),
  resetSuggestion: () => dispatch(resetSuggestion()),
  setQuery: query => dispatch(setQuery(query)),
  handleTimeout: timer => dispatch(handleTimeout(timer)),
  startGetSuggestions: query => dispatch(startGetSuggestions(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestions);
