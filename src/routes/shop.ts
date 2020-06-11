import {join} from 'path';
import express from 'express';

import rootDir from '../utils/path';

const router = express.Router();

// Root route
router.get('/', (_, res) =>{
  res.sendFile(join(rootDir, 'views', 'shop.html'));
})

export default router;