import { Router } from 'express';
import userController from '../controllers/userController';
import passport from 'passport';
// import GoogleStrategy from 'passport-google-oauth2';

const router = new Router();

// const clientID = process.env.CLIENT_ID;
// const clientSecret = process.env.CLIENT_SECRET;

// passport.use(new GoogleStrategy.Strategy({
//   clientID,
//   clientSecret,
//   callbackURL: 'http://localhost:3000/auth/google/callback',
//   passReqToCallback: true,
// }
//   // (request, accessToken, refreshToken, profile, done) => {
//     // User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
//   // }
// ));

/* Users */
router.route('/api/user').get(userController.getAll);
/* Authentication */

router.route('/auth/google').get(passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read',
  ],
}));

router.route('/auth/google/callback').get(passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

export default router;
