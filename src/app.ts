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

 app.listen(3001);
