const typeDefs = `#graphqlAdd commentMore actions
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello world!',
  },
};
