import { connect } from 'react-redux';
import LeftDashboard from './LeftDashboard';

const mapStateToProps = (state) => {
  const { leftDashboardState } = state;
  return {
    leftDashboardState,
  };
};

export default connect(mapStateToProps)(LeftDashboard);
