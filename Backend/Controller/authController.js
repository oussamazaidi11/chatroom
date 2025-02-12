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
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    console.log("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username: username,
    email: email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      message: "User created successfully",
      // user: {
      //   id: user._id,
      //   username: user.username,
      //   email: user.email,
      // },
    });
  } else {
    res.status(400);
    console.log("Invalid user data");
  }
});
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "user dosen t exist" });
  }
  const confpass = await bcrypt.compare(password, user.password);
  if (confpass) {
    res.status(200).json({
      message: "connect with success",
      token: Generatetoken(user._id),
    });
  } else {
    res.status(500).json({ message: "wrong password " });
  }
});

module.exports = { register, login };
