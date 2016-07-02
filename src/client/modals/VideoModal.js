import React, { PropType } from 'react';

const VideoModal = (props) => (
  <div>
    <div id="video" className="modal">
      <div className="modal-content row">
        <h4>Video Modal</h4>
        <p>Standard</p>
        {props.modalState.search.map(videoID => (
          <iframe width="560" height="315" src="https://www.youtube.com/embed/{videoID}" frameborder="0" allowfullscreen></iframe>
        ))}
        <div className="col s3">
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  </div>
);

ImageModal.propTypes = {
  modalState: PropType.object.isRequired,
};

export default VideoModal;
