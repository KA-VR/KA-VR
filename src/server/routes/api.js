/* eslint-disable no-console*/
import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import refresh from 'passport-oauth2-refresh';
import strategy from '../authentication/googleStrategy';
import Users from '../../../mysql.config';

const router = new Router();

refresh.use(strategy);

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  return res.redirect('/');
};

/* Users */
router.route('/api/user').get(userController.getAll);
/* Authentication */

router.route('/auth/google').get(authController.googleAuth);

router.route('/api/token').get(isAuthenticated, (req, res) => {
  Users.findOne({
    where: {
      email: req.user.email,
    },
  })
  .then(result => result.refreshToken)
  .then(token => {
    refresh.requestNewAccessToken('google', token, (err, accessToken) => {
      req.user.accessToken = accessToken;
      res.send({ accessToken });
    });
  });
});

router.route('/auth/google/callback').get(authController.googleRedirect);

export default router;
