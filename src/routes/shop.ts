import {join} from 'path';
import express from 'express';

const router = express.Router();

// Root route
router.get('/', (_, res) =>{
  res.sendFile(join(__dirname, '../', 'views', 'shop.html'));
})

export default router;