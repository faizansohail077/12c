const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
    type Query {
        hello:String
    }

`

const resolvers = {
    Query: {
        hello: () => "Hello faizan"
    }
}

const server = new ApolloServer({
    resolvers,
    typeDefs,
    
})

exports.handler = server.createHandler()
