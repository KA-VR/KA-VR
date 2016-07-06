import React, { PropTypes } from 'react';

const HelpModal = () => (
  <div id="help" className="modal">
    <div className="modal-content">
      <h3>Help</h3>
      <p>webSearch: 'search - Lets you search the web - ex. "search for dogs"'</p>
      <p>imageSearch: 'search image - Lets you search for images - ex. "search image of dogs"'</p>
      <p>newsSearch: 'search news - Lets you search for news articles -
      ex. "search news of dogs"'</p>
      <p>webOpen: 'open - Lets you go directly to a web site/application - ex. "open Facebook"'</p>
      <p>playVideo: 'play video - Lets you play videos on the web - ex. "play video of dogs"'</p>
      <p>calculate: 'calculate - Lets you make math calculations - ex. "calculate 5 + 5"'</p>
      <p>weatherSearch: `search weather - Lets you find weather of a city -
      ex. "search weather of San Francisco"`</p>
      <p>learning: `If you say something that KAVR is unsure about,
      a survey will show up that will allow it to learn from you!`</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
        Close
      </a>
    </div>
  </div>
);

HelpModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default HelpModal;
