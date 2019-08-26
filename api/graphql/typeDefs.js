const { gql } = require('apollo-server-express');

module.exports = gql`
type User{
  _id: String,
  username: String,
  email: String,
  password: String,
}

type Query {
  hello: String,
  getUsers: [User],
}

type Mutation{
  createUser(username:String!, email:String!, password:String!): User,
}
`;
