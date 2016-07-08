import React, { PropTypes } from 'react';

const YelpModal = (props) => {
  const shops = props.modalState.yelpsearchresults.shops;
  return (
    <div id="yelp" className="modal">
      <div className="modal-content">
        <h4>Yelp Search Results:</h4>
        <ul className="collection">
          {shops.map((result, key) => (
            <li key={key} className="collection-item">
              <div className="row">
                <div className="col m12">
                  <a href={result.url} target="_blank"><h5>{result.name}</h5></a>
                </div>
              </div>
              <div className="row">
                <div className="col m4">
                  <img src={result.image} alt="food" className="yelpimage" />
                  <h6>{result.location}</h6>
                  <h6>{result.city}, {result.state} {result.zip}</h6>
                </div>
                <div className="col m8">
                  <h6>Reviews: {result.reviews}</h6>
                  <h6>Rating: {result.rating}</h6>
                  <h6>What customers are saying:</h6>
                  <h6>{result.text}</h6>
                </div>
              </div>
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
