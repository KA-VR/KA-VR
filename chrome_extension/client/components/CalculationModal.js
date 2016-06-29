import React from 'react';

const CalculationModal = () =>
  <div id="CalculationModal" className="modal bottom-sheet">
    <div className="modal-content">
      <h4>Calculation</h4>
      <p id="calculationText"></p>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>;

export default CalculationModal;
