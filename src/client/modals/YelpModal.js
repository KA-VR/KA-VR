import React, { PropTypes } from 'react';

const YelpModal = (props) => {
  const shops = props.modalState.yelpsearchresults.shops;
  console.log('SHOPS:', shops);
  return (
    <div id="yelp" className="modal">
      <div className="modal-content">
        <h4>Yelp Search Results:</h4>
        <ul className="collection">
          {shops.map((result, key) => (
            <li key={key} className="collection-item">
              <a href={result.url}><h5>{result.name}</h5></a>
              <img src={result.image} alt="image"/>
              <h6>{result.location}</h6>
              <h6>{result.city}, {result.state} {result.zip}</h6>
              <h6>Reviews: {result.reviews}</h6>
              <h6>Rating: {result.rating}</h6>
              <h6>Preview: {result.text}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

YelpModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default YelpModal;
