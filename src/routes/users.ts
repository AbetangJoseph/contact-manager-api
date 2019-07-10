import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function(_req, res) {
  res.send('respond with a resource');
});

router.get('/home', (_req, res) => {
  res.send('this is users home page');
});

export default router;
