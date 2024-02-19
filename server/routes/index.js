import express from 'express';
const router = express.Router();

/* GET Home page */
router.get('/', function(){
  res.render('index', { title: 'Express with babel' });
});

export default router;