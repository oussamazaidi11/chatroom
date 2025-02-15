const asyncHandler = require("express-async-handler");

const Room = require("../Model/roomSchema");
const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const createRoom = asyncHandler(async (req, res) => {
  const { name, owner, password, limits } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const room = await Room.create({
    name,
    owner,
    password: hashedPassword,
    limits,
  });
  if (room) {
    res.status(201).json({ message: "room created with success" });
  } else {
    res.status(400).json({ message: "room creation failed" });
  }
});
const joinRoom = asyncHandler(async (req, re) => {
  const { roomName, password } = req.body;
  const exist = await Room.findOne({ name: roomName });
  if (exist) {
    const isValidPassword = await bcrypt.compare(password, room.password);
    if (isValidPassword) {
      res.status(200).json({ message: "room joined with success" });
      const room = await Room.create({
        invited,
      });
    } else {
      res.status(400).json({ message: "invalid password , failed join " });
    }
  }
});
module.exports = createRoom;
