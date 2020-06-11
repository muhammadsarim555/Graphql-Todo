const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString,
} = graphql;

const Item = require("./../models/item");
// const { ADDITEM_TYPE } = require("./typeSchema");

let TODOITEM_TYPE = new GraphQLObjectType({
  name: "TODOITEM_TYPE",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    item: {
      type: GraphQLString,
    },
  }),
});

let ADD_ITEM = {
  type: TODOITEM_TYPE,
  args: {
    item: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    let user = new Item({
      item: args.item,
    });
    return user.save();
  },
};

let GET_ITEM = {
  type: new GraphQLList(TODOITEM_TYPE),
  resolve(parent, args) {
    return Item.find();
  },
};

module.exports = {
  ADD_ITEM,
  GET_ITEM,
};
