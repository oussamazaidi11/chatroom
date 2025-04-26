const express = require("express");
const router = express.Router();
const sendMessage = require("../Controller/convController");
router.post("/conversation", sendMessage);
module.exports = router;
