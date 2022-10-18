const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mirats-panel-b2b", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connection Established"))
  .catch((err) =>
    console.log("Failed To Establish Connection With Database", err)
  );
