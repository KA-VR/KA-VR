import React from 'react';

const Avatar = (props) => (
  <div className="avatar">
    <h2>Our Avatar will go here</h2>
    <img
      src={'https://facebook.github.io/react/img/logo_og.png'}
      alt="avatar"
      onClick={props.click}
    />
  </div>
);

Avatar.propTypes = {
  click: React.PropTypes.func,
};

export default Avatar;
