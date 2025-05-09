const asyncHandler = require("express-async-handler");

const Room = require("../Model/roomSchema");
const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const createRoom = asyncHandler(async (req, res) => {
  const { name, password, limits } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const room = await Room.create({
    name,
    owner: User.name,
    password: hashedPassword,
    limits,
    state: "",
  });
  if (room) {
    res.status(201).json({ message: "room created with success", stat: room });
  } else {
    res.status(400).json({ message: "room creation failed" });
  }
});
const joinRoom = asyncHandler(async (req, re) => {
  const { name, password } = req.body;
  const exist = await Room.findOne({ name });

  if (exist) {
    const isValidPassword = await bcrypt.compare(password, Room.password);
    if (isValidPassword && Room.limits !== 0) {
      res.status(200).json({ message: "room joined with success" });
      Room.limits -= 1;
      exist.updateOne({}, { $set: { stat: "connected" } });
    } else {
      res.status(400).json({ message: "invalid password , failed join " });
    }
  }
});
module.exports = { createRoom, joinRoom };
