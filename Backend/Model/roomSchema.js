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
  nbperson: {
    type: Number,
    default: 1,
  },
  conversation: {
    type: Array,
    default: [],
  },
});
