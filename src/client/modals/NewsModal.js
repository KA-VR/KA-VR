import React, { PropTypes } from 'react';

const NewsModal = (props) => (
  <div id="news" className="modal bottom-sheet">
    <div className="modal-content">
      <h4 className="center-align">News</h4>
      <ul className="collection">
        {props.modalState.search.map(result => (
          <li className="collection-item">
            <a href={result.link} target="_blank">{result.link}</a>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

NewsModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default NewsModal;
