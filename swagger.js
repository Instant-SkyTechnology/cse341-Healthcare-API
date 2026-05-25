const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Healthcare API',
      version: '1.0.0',
      description: 'Healthcare CRUD API',
      components: {
        securitySchemes: {
          oauth2: {
            type: 'oauth2',
            flows: {
              authorizationCode: {
                authorizationUrl: 'https://github.com/login/oauth/authorize',
                tokenUrl: 'https://github.com/login/oauth/access_token',
                scopes: {}
              }
            }
          }
        }
      },
      security: [
        {
          oauth2: []
        }
      ]
    },
    servers: [
      {
        url: process.env.HTTP_SERVER_URL,
        description: "HTTP"
      },
      {
        url: process.env.HTTPS_SERVER_URL,
        description: "HTTPS"
      }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;