import express, {Response} from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import { join } from "path";
import rootDir from "./utils/path";

const app = express();

// All middlewares are executes from top to bottom

// Automaticaly call the next function in the end;
app.use(bodyParser.urlencoded({extended: false}));

// Admin routes
app.use('/admin', adminRoutes);

// Shop routes
app.use(shopRoutes);

// 404 route
app.use((_, res: Response) => {
  res.status(404)
  .sendFile(join(rootDir, 'views', '404.html'));
});

app.listen(3001);
