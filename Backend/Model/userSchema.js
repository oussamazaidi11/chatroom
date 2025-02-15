// configure a user schéma && rooms schéma
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
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
  role: {
    type: String,
    default: "user",
  },
  messagesend: {
    type: Array,
    default: [],
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
//userSchema as User
//ALIAS USERRR §§§§§§
