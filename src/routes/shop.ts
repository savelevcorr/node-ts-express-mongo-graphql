import {join} from 'path';
import express from 'express';

import rootDir from '../utils/path';
import {products} from "./admin";

const router = express.Router();

// Root route
router.get('/', (_, res) =>{
  console.log(products);
  res.sendFile(join(rootDir, 'views', 'shop.html'));
})

export default router;