import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import keys from '../../../config.js';
import apoc from 'apoc';

const clientID = keys.GOOGLE_CLIENT_ID;
const clientSecret = keys.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy.Strategy({
  clientID,
  clientSecret,
  callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true,
},
  (request, accessToken, refreshToken, profile, done) => {
    // const firstName = profile.name.givenName;
    // const lastName = profile.name.familyName;
    const fullName = 'Victoria Tran';

    apoc.query('MATCH (n:User) where n.name = "%fullName%" return n', { fullName }).exec().then(
      (response) => {
        console.log('WORKING :D', response[0].data[0].row[0]);
        // apoc.query('CREATE (n:User)').exec().then(
        //   (response) => {
        //     console.log('successfully added new user !!! response is:', response);
        //   },
        //   (fail2) => {
        //     console.log('did not add a new user. error is:', fail2);
        //   }
        // );
        done();
      },
      (fail) => {
        console.log('cannot find user', fail);
      }
    );
  }
));

export default passport;
