import express, {Response, static as staticMiddleware} from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';
import { join } from "path";
import rootDir from "./utils/path";

const app = express();

// All middlewares are executes from top to bottom

// Automatically call the next function in the end;
app.use(bodyParser.urlencoded({extended: false}));
// serving static files
app.use(staticMiddleware(join(rootDir, 'public')))

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
