const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  contact: String,
  address: String,
});

module.exports = mongoose.model("User", UserSchema);
