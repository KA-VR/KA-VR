/* eslint-disable no-console*/
import $ from 'jquery';

const signin = (userInfo, callback) => {
  $.ajax({
    url: '/signin',
    method: 'POST',
    data: userInfo,
    success: (data) => {
      const sess = data.session;
      window.localStorage.setItem('KAVR', sess.cookie.expires);
      window.localStorage.setItem('email', sess.passport.user.email);
      window.localStorage.setItem('id', sess.passport.user.id);
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
    url: '/signup',
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
