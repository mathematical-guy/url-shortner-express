import express from 'express';
import bodyParser from 'body-parser';
import indexRouter from './routes/index.js';
import { logger } from './middlewares/index.js';

import { PORT } from './init.js';


const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(logger);
app.use('/', indexRouter); // Use the routes defined in index.js



app.listen(PORT, function () {
  console.log(`Server started on ${PORT}!`)
})

