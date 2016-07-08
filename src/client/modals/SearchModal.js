import React, { PropTypes } from 'react';

const SearchModal = (props) => (
  <div id="search" className="modal bottom-sheet">
    <div className="modal-content">
      <h4 className="center-align">Search</h4>
      <ul className="collection">
        {props.modalState.search.map((result, key) => (
          <li key={key} className="collection-item">
            <a href={result.link} target="_blank">{result.link}</a>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

SearchModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default SearchModal;
