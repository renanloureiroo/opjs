import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '1.0.0',
    title: 'Waiter App API',
    description: 'Description',
  },
  host: 'localhost:3001',
  schemes: ['http'],
};
const outputFile = './swagger.json';
const endpointsFiles = ['../../router.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
