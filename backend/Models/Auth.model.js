const mongoose = require("mongoose");

// CREATE SCHEMA
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  }
});

//export module
module.exports = mongoose.model("user", userSchema);