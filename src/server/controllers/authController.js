import passport from '../authentication/googleAuth';

const googleAuth = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
  ],
});

const googleRedirect = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
});

export default { googleAuth, googleRedirect };
