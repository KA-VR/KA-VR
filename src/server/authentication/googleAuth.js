/* eslint-disable no-console*/

import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import keys from '../../../config.js';
import redis from 'redis';
import mysql from '../../../src/db/mysql.config';
import _ from 'underscore';
// import refresh from 'passport-oauth2-refresh';

const clientID = keys.GOOGLE_CLIENT_ID;
const clientSecret = keys.GOOGLE_CLIENT_SECRET;

const db = redis.createClient();

passport.serializeUser((user, done) => {
  console.log('user issss', user);
  console.log('done issss', done);
  done(null, user);
});

passport.deserializeUser((id, done) => {
  db.get('email', (error, result) => {
    done(error, result);
  });
});

passport.use(new GoogleStrategy.Strategy({
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
  console.log('refreshToken===!!', refreshToken);
  console.log('accessToken===!!', accessToken);
});
*/

    const val = {
      name: `${fullName}`,
      email: `${email}`,
    };
    // console.log('val', val);
    // console.log('profile:', profile);

    db.get('email', (error, result) => {
      if (error) {
        // there is no name key
        console.log('error: cannot find name key', error);
      } else {
        console.log('111', JSON.parse(result));
        console.log('111', val);
        // name is found so auth is successful
        if (_.isEqual(JSON.parse(result), val)) {
          done(null, profile);
        } else {
          // name is not found but key exists
          // create new user
          db.set('email', JSON.stringify(val), (error2, result2) => {
            if (error2) {
              throw 'error2: cannot set new user to name key' `${error2}`;
            } else {
              // throw 'successfully added new user! result2 is:' `${result2}`;
              console.log('successfully added new user! result2 is:', result2);
            }
          });

          mysql.create({
            name: fullName,
            email,
          })
            .then((user) => {
              console.log('user is:', user);
            });
          done(null, profile);
        }
      }
    });
  })
);


// passport.use(strategy);
// refresh.use(strategy);

export default passport;
