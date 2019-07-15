import React from 'react';
import { connect } from 'react-redux';
import Suggestions from './Suggestions';
import {
  startFilterTodos,
  handleTimeout,
  startGetSuggestions,
  resetSuggestion
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

  handleBlur = () => {
    setTimeout(() => {
      this.props.resetSuggestion();
    }, 300);
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
            onBlur={this.handleBlur}
          />
          <i className="fas fa-search ml-2" />
        </div>
        {this.props.isSuggesting && <Suggestions />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSuggesting: state.filters.isSuggesting,
    timer: state.helpers.timer
  };
};

const mapDispatchToProps = dispatch => ({
  startFilterTodos: query => dispatch(startFilterTodos(query)),
  handleTimeout: timer => dispatch(handleTimeout(timer)),
  startGetSuggestions: query => dispatch(startGetSuggestions(query)),
  resetSuggestion: () => dispatch(resetSuggestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
