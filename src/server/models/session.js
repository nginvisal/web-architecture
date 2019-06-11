const mongoose = require("mongoose");

const { Schema } = mongoose;

const Session = new Schema({
  session_id: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "active"
  },
  created_at: {
    type: Date,
    required: true
  },
  expired_at: {
    type: Date,
    required: true
  }
});

const SessionModel = mongoose.model("Session", Session);

module.exports = SessionModel;
