import React from 'react';
import { connect } from 'react-redux';
import { startFilterTodos } from '../actions/index';

class Suggestions extends React.Component {
  handleSuggestionClick = suggestion => {
    const { startFilterTodos } = this.props;
    startFilterTodos(suggestion);
  };

  render() {
    const { isSuggesting, suggestedTodos } = this.props;
    return (
      <ul className="search-suggestions">
        {isSuggesting &&
          suggestedTodos.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion"
              onClick={() => this.handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSuggesting: state.filters.isSuggesting,
    suggestedTodos: state.filters.suggestedTodos
  };
};

const mapDispatchToProps = dispatch => ({
  startFilterTodos: query => dispatch(startFilterTodos(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestions);
