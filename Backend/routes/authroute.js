// confgure routes api and testing with POSTMAN     !!!!!!!!!!!!
const express = require("express");
const router = express.Router();
const { register, login } = require("../Controller/authController");
router.post("/register", register).post("/login", login);
module.exports = router;
