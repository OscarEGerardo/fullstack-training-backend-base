const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const { schema } = require('./api/schemas/channel');

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

const server = express();

function loggingMiddleware(req, res, next) {
  console.log('ip:', req.ip);
  next();
}

server.use(loggingMiddleware);

server.use('/graphql', bodyParser.json(), graphqlExpress( req => ({
  schema,
  context: req
})));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
