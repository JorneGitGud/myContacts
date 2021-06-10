const moongoose = require("mongoose");

const User = new moongoose.Schema({
  username: String,
  password: String,
});

module.exports = moongoose.model("User", User);
