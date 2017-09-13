const { makeExecutableSchema } = require('graphql-tools');
const { resolvers } = require('./resolver');

const typeDefs = `
type Channel {
   id: ID!
   name: String
}

type Query {
   channels: [Channel]
}

type Mutation {
  changeName (id: Int! name: String!): Channel
  addChannel (name: String!): Channel
}

schema {
  query: Query
  mutation: Mutation
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };
