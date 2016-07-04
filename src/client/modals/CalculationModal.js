import React, { PropTypes } from 'react';

const CalculationModal = (props) => (
  <div id="calculation" className="modal">
    <div className="modal-content">
      <h3>The Answer Is: {props.modalState.calculation}</h3>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
        Close
      </a>
    </div>
  </div>
);

CalculationModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default CalculationModal;
