import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

/**
 * GraphQL Schema 定義
 */
// type typeDefs = string;

/**
 * @property {Object} Query - 查詢類型定義
 * @property {string} Query.greeting - 返回問候字串的查詢
 */
const typeDefs = `#graphql
schema {
  query: Query
}

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

// 快速簡便的方法來啟動一個獨立的 GraphQL 伺服器，並且不依賴其他 HTTP 框架
const { url } = await startStandaloneServer(server, {
  listen: { port: 9000 },
});
console.log(`🚀 Server running at: ${url}`);
