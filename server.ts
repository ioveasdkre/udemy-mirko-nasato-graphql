import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

/**
 * GraphQL Schema 定義
 * @typedef {string} typeDefs - 使用 GraphQL SDL (Schema Definition Language) 定義的架構
 * @property {Object} Query - 查詢類型定義
 * @property {string} Query.greeting - 返回問候字串的查詢
 */
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 9000 },
});
console.log(`🚀 Server running at: ${url}`);
