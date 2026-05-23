// const swaggerAutogen = require('swagger-autogen')();

// const doc = {
//   info: {
//     title: 'Healthcare API',
//     description: 'Healthcare API for patients and appointments'
//   },
//   host: 'localhost:3000',
//   schemes: ['http', 'https']
// };

// // const outputFile = './swagger.json';
// // const endpointsFiles = ['./routes/index.js'];

// // swaggerAutogen(outputFile, endpointsFiles, doc);
// const outputFile = "./swagger-output.json";
// const endpointsFiles = ["./server.js"];

// swaggerAutogen(outputFile, endpointsFiles, doc);

const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Healthcare API',
      version: '1.0.0',
      description: 'Healthcare CRUD API'
    },
    servers: [
      {
        url: process.env.SERVER_URL || 'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;