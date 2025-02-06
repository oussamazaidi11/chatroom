// configure a user schéma && rooms schéma
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please insert ur name"],
  },
  email: {
    type: String,
    required: [true, "insert email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "insert password"],
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
//userSchema as User
//ALIAS USERRR §§§§§§
