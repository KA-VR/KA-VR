import { connect } from 'react-redux';
import { submitSurvey } from '../actions';
import Modal from './Modal';

const mapStateToProps = (state) => {
  const { modalState, actions } = state;
  return {
    modalState,
    actions,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  modalSubmit: data => dispatch(submitSurvey(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

