import { Router } from 'express';
// import path from 'path';
import index from '../index.js';
// import index from '../../client/app.js';

const router = new Router();

router.route('*').get((req, res) => {
  res.send(index);
});

export default router;
