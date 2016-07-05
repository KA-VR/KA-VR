import React, { PropTypes } from 'react';

const ImageModal = (props) => {
  const images = props.modalState.images.map(link =>
    <div className="col s3 image-container">
      <a href={link} target="_blank">
        <img src={link} role="presentation" />
      </a>
    </div>
  );

  const groupSize = 4;
  const rows = images.map(content =>
    <div className="col-md-3">{content}</div>
  ).reduce((r, element, index) => {
    if (index % groupSize === 0) r.push([]);
    r[r.length - 1].push(element);
    return r;
  }, []).map(rowContent =>
    <div className="row">{rowContent}</div>
  );
  return (
    <div>
      <div id="image" className="modal">
        <div className="modal-content row">
          <h4>Image Modal</h4>
          <p>Standard</p>
          {rows}
        </div>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default ImageModal;
