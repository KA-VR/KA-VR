import React from 'react';

const StandardModal = (props) => (
  <div>
    <div id="standard" className="modal">
      <div className="modal-content">
        <h4>Standard Modal</h4>
        <p>Standard</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  </div>
);

export default StandardModal;
