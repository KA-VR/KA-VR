/* eslint-disable no-console*/
import $ from 'jquery';

const signin = (userInfo, callback) => {
  $.ajax({
    url: '/signin',
    type: 'POST',
    dataType: 'json',
    data: userInfo,
  })
  .done(res => {
    console.log('RES:', res);
    // Apply additional actions to our response from server
    return res;
  })
  .then(data => {
    console.log('DATA in SIGNIN: ', data);
    // Invoke our callback
    if (callback) {
      callback(data);
    }
  })
  .catch(err => {
    console.error('Error on signup', err);
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

const logout = () => {

};

export default {
  signin,
  signup,
  logout,
};
