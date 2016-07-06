import React, { PropTypes } from 'react';

const MapsModal = (props) => (
  <div id="maps" className="modal">
    <div className="modal-content">
      <iframe src={props.modalState.map.url} frameBorder="0"></iframe>
    </div>
  </div>
);

MapsModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default MapsModal;
