import React, { PropTypes } from 'react';

const WeatherWidget = ({ weatherState }) => (
  <div className="weather-widget">
    <p>Location</p>
    <p>{weatherState.state.city}</p>
    <p>{weatherState.state.avgTempF}
      <img role="presentation" src={weatherState.state.icon} />
    </p>
  </div>
);

WeatherWidget.propTypes = {
  weatherState: PropTypes.func,
};

export default WeatherWidget;
