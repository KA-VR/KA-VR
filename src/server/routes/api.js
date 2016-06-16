import { Router } from 'express';
import userController from '../controllers/userController';

const router = new Router();

/* Users */
router.route('/api/user').get(userController.getAll);
/* Authentication */

export default router;
