import React, { PropTypes } from 'react';
import StandardModal from './StandardModal';
import SurveyModal from './SurveyModal';
import SearchModal from './SearchModal';
import VideoModal from './VideoModal';

const Modal = (props) => (
  <div>
    <SurveyModal modalState={props.modalState} modalSubmit={props.modalSubmit} />
    <StandardModal modalState={props.modalState} />
    <SearchModal modalState={props.modalState} />
    <VideoModal modalState={props.modalState} />
  </div>
);


Modal.propTypes = {
  modalState: PropTypes.object.isRequired,
  modalSubmit: PropTypes.func.isRequired,
};

export default Modal;
