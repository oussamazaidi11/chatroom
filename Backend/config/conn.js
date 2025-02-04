const { cyan } = require("colors");
const mongoose = require("mongoose");
const ch = process.env.MONGOCONN;
const connect = async () => {
  try {
    const request = await mongoose.connect(ch);
    console.log(`**--MongoDB connected with success--* `.cyan.underline);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
