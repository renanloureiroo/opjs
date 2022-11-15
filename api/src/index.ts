import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { router } from './router';

const app = express();

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const PORT = 3001;

    app.use(express.json());
    app.use(morgan('dev'));

    app.use(router);

    app.listen(PORT, () => {
      console.log(`🎸 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Failed to connect to MongoDB'));
