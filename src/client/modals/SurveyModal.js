import React, { PropTypes } from 'react';

const SurveyModal = (props) => (
  <div>
    <div id="survey" className="modal">
      <div className="modal-content">
        <h4>Survey Modal</h4>
        <p>Survey</p>
        <div className="action-find col s12">
          <h6>Choose an action:</h6>
          {props.modalState.actions.map((action, index) => (
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
        </div>
        <div className="keyword-find col s12">
          <h6>Choose a Keyword:</h6>
          {props.modalState.text.split(' ').map((keyword, index) => (
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
        </div>
        <div className="verb-find col s12">
          <h6>Choose a Verb:</h6>
          {props.modalState.text.split(' ').map((verb, index) => (
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
      </div>
      <div className="modal-footer">
        <button
          onClick={props.modalSubmit}
          className=" waves-effect waves-green btn-flat"
        >
          {props.modalSubmit.toString()}
          Agree
          }
        </button>
      </div>
    </div>
  </div>
);

SurveyModal.propTypes = {
  modalState: PropTypes.object.isRequired,
  modalSubmit: PropTypes.func.isRequired,
};

export default SurveyModal;
