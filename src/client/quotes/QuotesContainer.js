/* global Materialize, $ */
/* eslint-disable no-console */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import Quote from './InspirationalQuotes';
import { getQuote } from '../actions/Quotes';

class QuotesContainer extends React.Component {
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
    const quote = this.props.state.quoteState.state;
    return (
      <div className="quotes">
        <input type="submit" onClick={this.updateQuote} />
        <span>
          {quote.quoteAuthor}{quote.quoteText}
        </span>
      </div>
    );
  }
}

QuotesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  'state.quoteState': PropTypes.object.isRequired,
  'state.quoteState.state': PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
