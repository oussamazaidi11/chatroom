const express = require("express");
const router = express.Router();
const createRoom = require("../Controller/roomController");
router.post("/profile", createRoom);
module.exports = router;
