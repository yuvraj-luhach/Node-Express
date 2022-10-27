const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  // forming a set structure for our task api

  //   validation of each property
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// model is a representation for the collection
// schema defines the structure for the document like type ,validation etc
// mongoose model provides an interface to the database.
// this makes api very straighforward

module.exports = mongoose.model("Task", TaskSchema);
