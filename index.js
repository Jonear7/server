const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');
const sequelize = require('./config/database');
require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers ,
  persistedQueries: {
    cache: "bounded", // Set the cache to be bounded
  },
});

sequelize.sync().then(() => {
  server.listen({ port: process.env.PORT || 4004 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}).catch(console.error);
