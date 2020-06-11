const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = graphql;

const Item = require("./../models/item");
let ADDITEM_TYPE = new GraphQLObjectType({
  name: "ADDITEM_TYPE ",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    item: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  ADDITEM_TYPE,
};
