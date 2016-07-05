import React, { PropTypes } from 'react';

const YelpModal = (props) => (
  <div id="yelpsearch" className="modal">
    <div className="modal-content">
      <h4>Search</h4>
      <ul className="collection">
        {props.modalState.search.map(result => (
          <li className="collection-item">
            <a href={result.link} target="_blank">{result.link}</a>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
        Close
      </a>
    </div>
  </div>
);

YelpModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default YelpModal;
