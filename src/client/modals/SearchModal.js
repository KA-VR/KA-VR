import React, { PropTypes } from 'react';

const SearchModal = (props) => (
  <div id="search" className="modal bottom-sheet">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
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
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
);

SearchModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default SearchModal;
