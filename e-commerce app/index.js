const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`
const resolvers = {
    Query: {
        hello: () => "Hello, world!"
    },
};

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    });
    
    console.log(`🚀 Server ready at ${url}`)
}

startServer().catch(err => {
    console.error('Error starting server:', err);
});