import React, { PropTypes } from 'react';

const WeatherWidget = ({ weatherState }) => (
  <div className="container">
    <div className="row" id="weather-widget">
      <div className="col s8">
        <p>{weatherState.state.city}</p>
        <p>
          {weatherState.state.avgTempF ? `${weatherState.state.avgTempF} F` : null}
        </p>
      </div>
      <div className="col s4">
        <img role="presentation" src={weatherState.state.icon} />
        <div className="weather-condition">
          {weatherState.state.weather ? `${weatherState.state.weather}` : null}
        </div>
      </div>
    </div>
  </div>
);

WeatherWidget.propTypes = {
  weatherState: PropTypes.object,
};

export default WeatherWidget;
