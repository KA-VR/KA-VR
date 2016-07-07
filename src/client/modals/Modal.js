import React, { PropTypes } from 'react';
import StandardModal from './StandardModal';
import SurveyModal from './SurveyModal';
import SearchModal from './SearchModal';
import VideoModal from './VideoModal';
import ImageModal from './ImageModal';
import CalculationModal from './CalculationModal';
import NewsModal from './NewsModal';
import WeatherModal from './WeatherModal';
import MapsModal from './MapsModal';
import HelpModal from './HelpModal';
import YelpModal from './YelpModal';

const Modal = (props) => (
  <div>
    <NewsModal modalState={props.modalState} />
    <ImageModal modalState={props.modalState} />
    <SurveyModal modalState={props.modalState} modalSubmit={props.modalSubmit} />
    <StandardModal modalState={props.modalState} />
    <SearchModal modalState={props.modalState} />
    <VideoModal modalState={props.modalState} />
    <CalculationModal modalState={props.modalState} />
    <WeatherModal modalState={props.modalState} />
    <MapsModal modalState={props.modalState} />
    <HelpModal modalState={props.modalState} />
    <YelpModal modalState={props.modalState} />
  </div>
);


Modal.propTypes = {
  modalState: PropTypes.object.isRequired,
  modalSubmit: PropTypes.func.isRequired,
};

export default Modal;
