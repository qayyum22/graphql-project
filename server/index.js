const express = require("express")
require("dotenv").config()
const { graphqlHTTP } = require("express-graphql");
const PORT = process.env.PORT || 3000;
const schema = require("./schema/schema");

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'

}))
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))