import React, { PropTypes } from 'react';

const HelpModal = () => (
  <div id="help" className="modal">
    <div className="modal-content">
      <h3>Help</h3>
      <p>Web Search: 'search - Lets you search the web - ex. "search for dogs"'</p>
      <p>Image Search: 'search image - Lets you search for images - ex. "search image of dogs"'</p>
      <p>News Search: 'search news - Lets you search for news articles -
      ex. "search news of dogs"'</p>
      <p>Web Open: 'open - Lets you go directly to a web site/application - ex. "open Facebook"'</p>
      <p>Play Video: 'play video - Lets you play videos on the web - ex. "play video of dogs"'</p>
      <p>Calculate: 'calculate - Lets you make math calculations - ex. "calculate 5 + 5"'</p>
      <p>Weather Search: `search weather - Lets you find weather of a city -
      ex. "search weather of San Francisco"`</p>
      <p>Run Last Action: `run last action - Lets you run the last action you just did -
      ex. "run last action"`</p>
      <p>Learning: `If you say something that KAVR is unsure about,
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
