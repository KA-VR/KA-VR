import { connect } from 'react-redux';
import RightDashboard from './RightDashboard';

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    authState,
  };
};

export default connect(mapStateToProps)(RightDashboard);
