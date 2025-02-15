const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    require: true,
  },
  invited: {
    type: Object,
    required: true,
    default: {},
  },
  limits: {
    type: Number,
    default: 2,
  },
  conversation: {
    type: Array,
    default: [],
  },
});
const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
