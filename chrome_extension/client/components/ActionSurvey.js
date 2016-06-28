import React, { PropTypes } from 'react';

const ActionSurvey = (props) =>
  <div className="action-find col s12">
    <h6>Choose an action:</h6>
    {props.actions.map((action, index) => (
      <p key={action}>
        <input
          className="with-gap"
          name="actiongroup"
          type="radio"
          id={`action${index}`}
          value={action}
        />
        <label htmlFor={`action${index}`}>{action}</label>
      </p>
    ))}
  </div>;

ActionSurvey.propTypes = {
  actions: PropTypes.array,
};

export default ActionSurvey;
