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

let EDIT_USER = {
  type: TODOITEM_TYPE,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    item: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    const update_item = await Item.findOne({ _id: args._id });

    if (args.item) {
      update_item.item = args.item;
    }

    return update_item.save();
  },
};

let DELETE_ITEM = {
  type: TODOITEM_TYPE,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    return Item.remove({ _id: args._id });
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
  EDIT_USER,
  DELETE_ITEM,
};
