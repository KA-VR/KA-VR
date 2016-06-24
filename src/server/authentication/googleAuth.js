/* eslint-disable no-console*/
import passport from 'passport';
import strategy from './googleStrategy.js';

passport.serializeUser((user, done) => {
  const sessionUser = {
    id: user.id,
    name: user.displayName,
    email: user.email,
    accessToken: user.accessToken,
  };
  done(null, sessionUser);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(strategy);

export default passport;
