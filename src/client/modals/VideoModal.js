import React, { PropTypes } from 'react';

const VideoModal = (props) => (
    <div id="video" className="modal bottom-sheet">
      <div className="modal-content">
        <h4>Video Modal</h4>
        <p>Standard</p>
          <iframe width="560" height="315" src={props.modalState.video} frameborder="0" allowfullscreen></iframe>
        <div className="col s3">
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
);

VideoModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default VideoModal;
