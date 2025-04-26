const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const colors = require("colors");

const connect = require("./config/conn");
app.listen(PORT, () => console.log("server is running on port" + PORT));
connect();
const morgan = require("morgan");
app.use(morgan("dev")); /// for view req

/// create a white cors for connecting
/// bech l back yaaref l front w tsyr handshake !!!!!!!!!!!!!!!!!!!!!
const cors = require("cors");
const corsOptions = { origins: [process.env.ALLOWED_ORIGIN] };
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./routes/authroute"));
app.use(
  "/api/room",
  require("./routes/roomroute"),
  require("./routes/convroute")
);
