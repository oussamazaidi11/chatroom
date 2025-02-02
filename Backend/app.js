const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
app.listen(PORT, () => console.log("server is running on port" + PORT));
const connect = require("./config/conn");
connect();
/// create a white cors for connecting two servers 
/// create a file upload path
// download path 