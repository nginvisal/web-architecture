const mongoose = require("mongoose");

// Define a schema
const { Schema } = mongoose;

const User = new Schema({
  first_name: String,
  last_name: String,
  
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;
