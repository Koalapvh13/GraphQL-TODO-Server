const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

require('dotenv').config()

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('MongoDB is connected ...')
    return server.listen({
        port: process.env.PORT
    })

}).then(res => {
    console.log('Server running at ', res.url)

})