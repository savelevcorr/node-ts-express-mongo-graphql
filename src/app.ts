import express from 'express';

const app = express();

// All middlewares are executes from top to bottom

// We are don't call the next function, 
// so we don't go to the next middleware
app.use('/add-product', (_, res) => {
  res.send('<h1>The "Add Product" page</h1>')
})

app.use('/', (_, res) =>{
  console.log('In an another middleware');
  res.send('<h1>Middleware header</h1>');
})

 app.listen(3001);
