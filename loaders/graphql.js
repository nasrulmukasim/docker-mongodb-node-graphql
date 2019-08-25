const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('../models/typeDefs');
const resolvers = require('../models/resolvers');
const config = require('../config');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port:config.app.port }, () => 
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

module.exports = {
  app,
  server
};
