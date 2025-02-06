// confgure routes api and testing with POSTMAN     !!!!!!!!!!!!
const express = require("express");
const router = express.Router();
const register = require("../Controller/authController");
router.post("/register", register);
module.exports = router;
