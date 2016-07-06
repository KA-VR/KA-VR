import React, { PropTypes } from 'react';

const HelpModal = (props) => (
  <div id="help" className="modal">
    <div className="modal-content">
      <h3>Weather in {props.modalState.weather.city}, {props.modalState.weather.country}</h3>
      <p>{props.modalState.weather.weather} - "{props.modalState.weather.weatherDes}"</p>
      <img alt="Weather Icon" className="icon" src={''.concat(props.modalState.weather.icon)} />
      <p>Average Temperature: {props.modalState.weather.avgTempF}&deg;F /
        {props.modalState.weather.avgTempC}&deg;C</p>
      <p>Max Temperature: {props.modalState.weather.maxTempF}&deg;F /
        {props.modalState.weather.maxTempC}&deg;C</p>
      <p>Mininum Temperature: {props.modalState.weather.minTempF}&deg;F /
        {props.modalState.weather.minTempC}&deg;C</p>
      <p>Humidity: {props.modalState.weather.humidity}&#37;</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
        Close
      </a>
    </div>
  </div>
);

HelpModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default HelpModal;
