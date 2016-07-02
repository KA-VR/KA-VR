import React, { PropType } from 'react';

const ImageModal = (props) => (
  <div>
    <div id="image" className="modal">
      <div className="modal-content row">
        <h4>Image Modal</h4>
        <p>Standard</p>
        {props.modalState.search.map(link => (
          <img role="presentation" src={link} />
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

export default ImageModal;
