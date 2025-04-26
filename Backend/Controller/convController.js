const room = require("../Model/roomSchema");
const asyncHandler = require("express-async-handler");

const sendMessage = asyncHandler(async (req, res) => {
  const message = req.body;
  const conn = room.findOne({ stat: "connected" });
  const conv = [];
  conv.push(message);
  if (conn) {
    conn.updateOne({}, { $set: { conversation: conv } });
    res.status(200).json({ message: "send with success " });
  } else {
    res.status(404).json("no message found ");
  }
});
module.exports = sendMessage;
