import { connect } from 'react-redux';
import WeatherWidget from './WeatherWidget';
import { getWeather } from '../actions';

const mapStateToProps = (state) => {
  const { weatherState } = state;
  return {
    weatherState,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  getWeather: () => (
    dispatch(getWeather())
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
