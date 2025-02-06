// configure the back with generating token
// transporter for verifyinn mail
const User = require("../Model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const tokenkey = process.env.TOKEN_KEY;
const Generatetoken = (id) => {
  return jwt.sign({ id }, tokenkey, { expiresIn: "1d" });
};
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const verify = await User.findOne({ email });
  if (verify) {
    res.status(400).json({ message: "Email already exist" });
    return;
  }
  //hash pswd:
  //hash algo!!!!!!
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedpassword,
  });
  res.status(200).json({
    message: "user created with success",
    user,
    token: Generatetoken(user._id),
  });
});
module.exports = register;
