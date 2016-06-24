import passport from '../authentication/googleAuth';

const googleAuth = passport.authenticate('google', {
  scope: [
    'profile',
    'email',
    'openid',
    'https://www.googleapis.com/auth/calendar',
  ],
  prompt: 'consent',
  accessType: 'offline',
});

const googleRedirect = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
});

export default { googleAuth, googleRedirect };
