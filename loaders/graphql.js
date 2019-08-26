const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../api/graphql/typeDefs');
const resolvers = require('../api/graphql/resolvers.js');
const { appConfig } = require('../config');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });


app.listen({ port: appConfig.port }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));

module.exports = {
  app,
  server,
};
