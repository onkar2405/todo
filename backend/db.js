const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://onkar:onkar@cluster0.dgxmi.mongodb.net/todos?authMechanism=DEFAULT"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
