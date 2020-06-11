const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  item: { type: String },
});

module.exports = mongoose.model("TodoItem", todoSchema);
