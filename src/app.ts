import express, {Response, static as staticMiddleware} from 'express';
import bodyParser from 'body-parser';
import http, {Server} from 'http';

import port from "./utils/get-port";
import adminRoutes, { products } from "./routes/admin";
import shopRoutes from './routes/shop';
import { join } from "path";
import rootDir from "./utils/path";

const app = express();
let httpServer: Server;

// Set html template engine
app.set('view engine', 'ejs');

// Specify the directory where is the view's files
app.set('views', join(rootDir, 'views'));

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
  res.render("404", { products, docTitle: "404 Not Found" });
});

httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log('HTTP Server is running on port', port);
});
