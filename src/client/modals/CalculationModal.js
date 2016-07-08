import React, { PropTypes } from 'react';

const CalculationModal = (props) => {
  const context = props.actions.result.contexts;
  const problem = context ? context.join(' ') : '';
  return (
    <div id="calculation" className="modal">
      <div className="modal-content">
        <h3 className="center-align">
          {problem} = {props.modalState.calculation}
        </h3>
      </div>
    </div>
  );
};

CalculationModal.propTypes = {
  modalState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default CalculationModal;
