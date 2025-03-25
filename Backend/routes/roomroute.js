const express = require("express");
const router = express.Router();
const { createRoom, joinRoom } = require("../Controller/roomController");
router.post("/profile", [createRoom, joinRoom]);

module.exports = router;
