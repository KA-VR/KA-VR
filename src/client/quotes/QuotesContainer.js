/* global Materialize, $ */
/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import Quote from './InspirationalQuotes';
import { getQuote } from '../actions/Quotes';

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.updateQuote = this.updateQuote.bind(this);
    this.render = this.render.bind(this);
  }

  updateQuote(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(getQuote());
  }
  render() {
    const { quoteState } = this.props;
    const quote = quoteState.state;
    return (
      <div className="quotes">
        <input
          className="waves-effect theme2-bg waves-light"
          type="submit" onClick={this.updateQuote}
        />
        <span>
          {quote.quoteAuthor ? `${quote.quoteAuthor}: ` : null}
          {quote.quoteText}
        </span>
      </div>
    );
  }
}

QuotesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quoteState: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  const { quoteState } = state;
  return {
    quoteState,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
