import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { router } from './router';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './shared/swagger/swagger.json';

const app = express();

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const PORT = 3001;

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    );
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(router);

    app.use('/api-doc/v1', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.listen(PORT, () => {
      console.log(`🎸 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Failed to connect to MongoDB'));
