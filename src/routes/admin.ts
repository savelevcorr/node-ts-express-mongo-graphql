import {join} from 'path';
import express from 'express';

const router = express.Router();

// We are don't call the next function, 
// so we don't go to the next middleware
router.get('/add-product', (_, res) => {
  res.sendFile(join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  console.log(req.body.title);

  res.redirect('/')
});

export default router;