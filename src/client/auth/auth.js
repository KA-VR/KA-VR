/* eslint-disable no-console*/
/* global $ */
// import $ from 'jquery';

const signin = (userInfo, callback) => {
  $.ajax({
    url: 'http://localhost:3000/signin',
    method: 'POST',
    data: userInfo,
    success: (data) => {
      const sess = data.session;
      document.cookie = `email=${sess.passport.user.email}expires${sess.cookie.expires}`;
      if (callback) {
        callback(data);
      }
    },
    error: (req, status, err) => {
      console.error('Error: ', req, status, err);
    },
  });
};

const signup = (userInfo, callback) => {
  $.ajax({
    url: 'http://localhost:3000/signup',
    type: 'POST',
    dataType: 'json',
    data: userInfo,
  })
  .done(data => {
    if (callback) {
      callback(data);
    }
  })
  .catch(err => {
    console.error('Error on signup', err);
  });
};

export default {
  signin,
  signup,
};
