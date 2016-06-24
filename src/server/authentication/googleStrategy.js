/* eslint-disable no-console*/
import GoogleStrategy from 'passport-google-oauth2';
import keys from '../../../config.js';
import redis from 'redis';
import Users from '../../../mysql.config';
const db = redis.createClient();

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
    const fullName = `${firstName} ${lastName}`;

/*
refresh.requestNewAccessToken('google', 'someRefreshToken', (err, accessToken, refreshToken) => {
});
  */
    const profileObj = profile;
    profileObj.accessToken = accessToken;

    const val = {
      name: `${fullName}`,
      email: `${email}`,
      refreshToken: `${refreshToken}`,
    };

    Users.findOne({
      where: {
        email: `${email}`,
      },
    })
    .then((result) => {
      console.log('res', result);
      if (!result) {
        db.set(email, JSON.stringify(val), (error2, result2) => {
          if (error2) {
            console.log('error2: cannot set new user to name key', error2);
          } else {
            console.log('successfully added new user! result2 is:', result2);
          }
        });

        Users.create({
          name: fullName,
          email,
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
