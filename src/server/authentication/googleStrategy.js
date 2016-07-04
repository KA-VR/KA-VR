/* eslint-disable no-console*/
import GoogleStrategy from 'passport-google-oauth2';
import keys from '../../../config.js';
import Users from '../../../mysql.config';
import calendarHelper from '../helper/calendarHelper';

const clientID = keys.GOOGLE_CLIENT_ID;
const clientSecret = keys.GOOGLE_CLIENT_SECRET;

const strategy = new GoogleStrategy.Strategy({
  clientID,
  clientSecret,
  callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true,
},
  (request, accessToken, refreshToken, profile, done) => {
    const firstName = profile.name.givenName;
    const lastName = profile.name.familyName;
    const email = profile.email;
    const profileObj = profile;
    profileObj.accessToken = accessToken;

<<<<<<< HEAD
=======
    calendarHelper.events(accessToken)
    .then(res => {
      console.log(res);
    });

>>>>>>> c7bff21f53f139d33adc11d42a208edcb3d06089
    Users.findOne({
      where: {
        email: `${email}`,
      },
    })
    .then((result) => {
      console.log('res', result);
      if (!result) {
        Users.create({
          firstname: firstName,
          lastname: lastName,
          email,
          password: null,
          refreshToken: `${refreshToken}`,
        })
        .then((user) => {
          console.log('user is:', user);
        });

        done(null, profileObj);
      } else {
        done(null, profileObj);
      }
    });
  });

export default strategy;
