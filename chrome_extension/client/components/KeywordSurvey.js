import React, { PropTypes } from 'react';

const KeywordSurvey = (props) =>
  <div className="keyword-find col s12">
    <h6>Choose a Keyword:</h6>
    {props.transcription.text.split(' ').map((keyword, index) => (
      <p key={keyword}>
        <input
          className="with-gap"
          name="keywordgroup"
          type="radio"
          id={`keyword${index}`}
          value={keyword}
        />
        <label htmlFor={`keyword${index}`}>{keyword}</label>
      </p>
    ))}
  </div>;

KeywordSurvey.propTypes = {
  transcription: PropTypes.object,
};

export default KeywordSurvey;
