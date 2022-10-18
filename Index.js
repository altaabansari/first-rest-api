const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3030;
const cors = require("cors");
const userRegister = require("./src/routers/registerRouter");
require("./src/db/Connection");
app.use(express.json());
app.use(cors());
app.use(userRegister);

app.listen(port, (req, res) => {
  console.log(`connection has established at ${port}`);
});
