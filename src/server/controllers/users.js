const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = {
  getProfile: ({ params }, res) => {
    User.find({
      _id: mongoose.Types.ObjectId(params.id)
    }, (findError, userFound) => {
      res.send(userFound);
    });
    res.send("me");
  },
  logIn: ({ body }, res) => {
    User.find({
      username: body.username,
      password: body.password
    }, (findError, userFound) => {
      // generate session toke to use
      res.send("User Found");
    })
  },
  createUser: ({ body }, res) => {
    const user = new User({
      first_name: body.first_name,
      last_name: body.last_name,
      username: body.username,
      password: body.password
    });
    user.save((saveError, saveSuccess) => {
      if (saveError) {
        return res.send("Error Saving User");
      }
      if (saveSuccess) {
        res.send("User saved successfully");
      }
    });
  }
}
