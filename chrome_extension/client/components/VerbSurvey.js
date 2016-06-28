import React, { PropTypes } from 'react';

const VerbSurvey = (props) =>
  <div className="verb-find col s12">
    <h6>Choose a Verb:</h6>
    {props.transcription.text.split(' ').map((verb, index) => (
      <p key={verb}>
        <input
          className="with-gap"
          name="verbgroup"
          type="radio"
          id={`verb${index}`}
          value={verb}
        />
        <label htmlFor={`verb${index}`}>{verb}</label>
      </p>
    ))}
  </div>;

VerbSurvey.propTypes = {
  transcription: PropTypes.object,
};

export default VerbSurvey;