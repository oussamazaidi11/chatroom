const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const colors = require("colors");

const connect = require("./config/conn");
app.listen(PORT, () => console.log("server is running on port" + PORT));
connect();
const morgan = require("morgan");
app.use(morgan("dev"));

/// create a white cors for connecting two servers
const cors = require("cors");
const corsOptions = { origins: [process.env.ALLOWED_ORIGIN] };
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./routes/authroute"));
app.use("/api/room", require("./routes/roomroute"));
