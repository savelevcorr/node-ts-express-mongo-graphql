import express from 'express';

const router = express.Router();

// We are don't call the next function, 
// so we don't go to the next middleware
router.get('/add-product', (_, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Title"><button type="submit">Add product</button></form>')
});

router.post('/product', (req, res) => {
  console.log(req.body.title);

  res.redirect('/')
});

export default router;