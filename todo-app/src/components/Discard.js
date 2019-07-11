import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetError } from '../actions/index';

class Discard extends React.Component {
  handleDiscard = () => {
    const { error, resetError, history } = this.props;
    error && resetError();
    history.push('/');
  };

  render() {
    return (
      <div onClick={() => this.handleDiscard()} className="btn btn-secondary">
        discard
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.errors.isError
  };
};

const mapDispatchToProps = dispatch => ({
  resetError: () => dispatch(resetError())
});

const DiscardWithRouter = withRouter(Discard);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscardWithRouter);
