import { connect } from 'react-redux';
import RightDashboard from './RightDashboard';

const mapStateToProps = (state) => {
  const { rightDashboardState } = state;
  return {
    rightDashboardState,
  };
};

export default connect(mapStateToProps)(RightDashboard);
