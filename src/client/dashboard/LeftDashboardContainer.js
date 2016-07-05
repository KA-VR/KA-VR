import { connect } from 'react-redux';
import LeftDashboard from './LeftDashboard';

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    authState,
  };
};

export default connect(mapStateToProps)(LeftDashboard);
