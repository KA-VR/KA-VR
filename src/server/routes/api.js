import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
const router = new Router();

/* Users */
router.route('/api/user').get(userController.getAll);
/* Authentication */

router.route('/auth/google').get(authController.googleAuth);

router.route('/auth/google/callback').get(authController.googleRedirect);

export default router;
