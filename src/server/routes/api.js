/* eslint-disable no-console*/
import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import refresh from 'passport-oauth2-refresh';
import strategy from '../authentication/googleStrategy';
import Users from '../../../mysql.config';

const router = new Router();

refresh.use(strategy);

// Middleware that checks if user is already authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  return res.redirect('/');
};

/* Users */
router.route('/api/user').get(userController.getAll);
/* Authentication */

// Route to Google OAuth
router.route('/auth/google').get(authController.googleAuth);

// Generating new access tokens using refresh token
router.route('/api/token').get(isAuthenticated, (req, res) => { /* If user is authenticated */
  // Finding user that is currently logged in based on their email
  Users.findOne({
    where: {
      email: req.user.email,
    },
  })
  .then(result => result.refreshToken)
  .then(token => {
    // This method gets a new access token upon expiration of token every hour
    refresh.requestNewAccessToken('google', token, (err, accessToken) => {
      req.user.accessToken = accessToken;
      res.send({ accessToken });
    });
  });
});

router.route('/auth/google/callback').get(authController.googleRedirect);

// Handle SignUp routing/authentication


// Handle SignIn routing/authentication

export default router;
