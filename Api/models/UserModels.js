const mongoose = require("mongoose");

const ThirdPartyProviderSchema = new mongoose.Schema({});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
