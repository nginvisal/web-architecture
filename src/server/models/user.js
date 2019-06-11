const mongoose = require("mongoose");

// Define a schema
const { Schema } = mongoose;

const User = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;
