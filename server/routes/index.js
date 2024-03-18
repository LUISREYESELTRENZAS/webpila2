import express from 'express';

const router = express.Router();

/* GET Home page */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express with babel' });
});

export default router;
