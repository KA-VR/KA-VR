import { connect } from 'react-redux';
import LeftDashboard from './LeftDashboard';
import { executeSignout } from '../actions/auth';

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    authState,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  signOut: e => {
    e.preventDefault();
    return dispatch(executeSignout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftDashboard);
