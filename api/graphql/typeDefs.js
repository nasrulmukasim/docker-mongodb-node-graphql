const { gql } = require('apollo-server-express');

module.exports = gql`
type User {
  _id: ID,
  username: String,
  email: String,
  password: String,
}

type AuthToken {
  token: String,
  expires: Int,
}

type Query {
  hello: String,
  getUsers: [User],
}

type Mutation{
  createUser(username:String!, email:String!, password:String!): User,
  login(username:String!, password:String!): AuthToken,
}
`;
