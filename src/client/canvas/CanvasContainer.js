import { connect } from 'react-redux';
import Canvas from './Canvas';
import {
  fetchNodes,
  toggleGetAllLabels,
} from '../actions';

const mapStateToProps = (state) => {
  const { isRecording, labelSpheres, labelsStatus } = state;
  return {
    isRecording,
    labelSpheres,
    labelsStatus,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  toggleLabelStatus: status => toggleGetAllLabels(status),
  fetchNodes: type => fetchNodes(type),
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
