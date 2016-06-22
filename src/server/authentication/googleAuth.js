import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import keys from '../../../config.js';
import redis from 'redis';
import mysql from '../../../src/db/mysql.config';

const clientID = keys.GOOGLE_CLIENT_ID;
const clientSecret = keys.GOOGLE_CLIENT_SECRET;

const db = redis.createClient();

passport.use(new GoogleStrategy.Strategy({
  clientID,
  clientSecret,
  callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true,
},
  (request, accessToken, refreshToken, profile, done) => {
    const firstName = profile.name.givenName;
    const lastName = profile.name.familyName;
    const fullName = `${firstName} ${lastName}`;

    db.get('name', (error, result) => {
      if (error) {
        // there is no name key
        // eslint-disable-next-line
        throw 'error: cannot find name key', error;
      } else {
        // name is found so auth is successful
        if (result === fullName) {
          done();
        } else {
          // name is not found but key exists
          // create new user
          db.set('name', fullName, (error2, result2) => {
            if (error2) {
              throw 'error2: cannot set new user to name key' `${error2}`;
            } else {
              throw 'successfully added new user! result2 is:' `${result2}`;
            }
          });

          mysql.create({
            name: fullName,
          })
            .then((user) => {
              throw 'user is:' `${user}`;
            });
        }
      }
    });
  }
));

export default passport;
