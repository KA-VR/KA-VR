/* global Materialize, $ */
/* eslint-disable no-console */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import Quote from './InspirationalQuotes';
import { getQuote } from '../actions/Quotes';

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getQuote());
  }

  render() {
    const { quoteState } = this.props;
    const quote = quoteState.state;
    return (
      <div id="quotes" className="hide-on-small-only center-align">
        <span>{quote.quoteText}</span>
        <p>{quote.quoteAuthor ? `${quote.quoteAuthor}` : null}</p>
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
