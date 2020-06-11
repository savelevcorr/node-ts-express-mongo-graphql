import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

const app = express();

// All middlewares are executes from top to bottom

// Automaticaly call the next function in the end;
app.use(bodyParser.urlencoded({extended: false}));

// Admin routes
app.use(adminRoutes);

// Shop routes
app.use(shopRoutes);

// 404 route
app.use((_, res) => {
  res.status(404)
  .send('<h1>Page Not Found</h1>');
});

 app.listen(3001);
