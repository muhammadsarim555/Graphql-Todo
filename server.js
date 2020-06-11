const express = require("express");

const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const graphqlHTTP = require("express-graphql");
const MyGraphQLSchema = require("./shemas");

mongoose.connect();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log(`App is Listening on 8080`);
});

// module.exports = app;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);
