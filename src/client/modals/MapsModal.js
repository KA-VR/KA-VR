import React, { PropTypes } from 'react';

const MapsModal = (props) => (
  <div id="map" className="modal">
    <div className="modal-content">
      <iframe src={props.modalState.map} frameBorder="0"></iframe>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
        Close
      </a>
    </div>
  </div>
);

MapsModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default MapsModal;
