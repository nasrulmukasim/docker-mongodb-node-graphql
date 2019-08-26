const GMR = require('graphql-merge-resolvers');

const authResolver = require('./resolvers/auth.js');
const userResolver = require('./resolvers/user.js');

const resolvers = GMR.merge([
  authResolver,
  userResolver,
]);

module.exports = {
  ...resolvers,
};
