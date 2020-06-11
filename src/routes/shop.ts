import express from 'express';

const router = express.Router();

// Root route
router.get('/', (_, res) =>{
  res.send('<h1>Hello from Express!</h1>');
})

export default router;