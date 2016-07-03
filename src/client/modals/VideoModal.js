import React, { PropTypes } from 'react';

const resize = () => {
  const height = window.innerHeight / 2;
  return height;
}

const stopVideo = () => {
  $('.video').leanModal({
     complete: function() {
      var $if = $(e.delegateTarget).find('iframe');
      var src = $if.attr("src");
      $if.attr("src", '/empty.html');
      $if.attr("src", src);
     } // Callback for Modal close
   }
 );
}

const VideoModal = (props) => (
    <div id="video" className="modal">
      <div className="modal-content">
          <iframe width="100%" height={resize()} src={props.modalState.video} frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="modal-footer">
        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">
          Close
        </a>
      </div>
    </div>
);

VideoModal.propTypes = {
  modalState: PropTypes.object.isRequired,
};

export default VideoModal;
