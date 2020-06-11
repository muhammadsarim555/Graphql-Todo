const graphql = require("graphql");
const mongoose = require("mongoose");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = graphql;

const { ADD_ITEM, GET_ITEM } = require("./todoItem");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    GET_ITEM,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ADD_ITEM,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
