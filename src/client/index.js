// import React from 'react';
import ReactDOM from 'react-dom';
import Router from './utils/router';
// import Index from '../server/index.js';
// import Speech from './components/SpeechToTextContainer.js';

// Stylesheets
import './stylesheets/style.scss';
import './stylesheets/userstats.scss';
import './stylesheets/widget.scss';
import './stylesheets/chatbox.scss';
import './stylesheets/avatar.scss';
import './stylesheets/signin.scss';

ReactDOM.render(Router, document.getElementById('app'));
