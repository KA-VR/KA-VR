import App from './App';
import '../stylesheets/materialize.scss';
import '../stylesheets/style.scss';
import '../stylesheets/userstats.scss';
import '../stylesheets/widget.scss';
import '../stylesheets/chatbox.scss';
import '../stylesheets/avatar.scss';
import '../stylesheets/signin.scss';
import '../stylesheets/signup.scss';
import '../stylesheets/speechText.scss';
import '../stylesheets/extension.scss';
import '../stylesheets/modal.scss';
import '../stylesheets/surveyModal.scss';
import '../stylesheets/videoModal.scss';
import '../stylesheets/imageModal.scss';
import '../stylesheets/yelpModal.scss';
import '../stylesheets/dashboard.scss';
import '../stylesheets/todoApp.scss';
import '../stylesheets/weatherWidget.scss';
import '../stylesheets/quotes.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { authState } = state;
  return {
    authState,
  };
};

export default connect(mapStateToProps)(App);
