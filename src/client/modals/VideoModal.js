import React, { PropTypes } from 'react';

const VideoModal = (props) => (
  <div id="video" className="modal">
    <div className="modal-content">
      <iframe src={props.modalState.video} frameBorder="0"></iframe>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
        Close
      </a>
    </div>
  </div>
);

VideoModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default VideoModal;
