import passport from '../authentication/googleAuth';

const googleAuth = passport.authenticate('google', {
  scope: [
    // need to access calendar
    // 'https://www.googleapis.com/auth/calendar',
    // need to access user profile
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read', // need to also be able to send emails - right now is read only
  ],
  // approvalPrompt: 'force',
});

const googleRedirect = passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
});

export default { googleAuth, googleRedirect };
