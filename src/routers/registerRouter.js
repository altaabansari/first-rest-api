const User = require("../models/UserOnboarding");
const express = require("express");
const router = express.Router();
router.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save();
  res.send(req.body);
});
router.get("/get-register", async (req, res) => {
  User.find({}).then((ress) => res.send(ress));
});
router.put("/update-register/:name", async (req, res) => {
  User.updateOne({ name: req.params.name }, req.body).then((result) =>
    res.send(result)
  );
});
router.delete("/del-register/:name", async (req, res) => {
  User.deleteOne({ name: req.params.name }).then((ress) => res.send(ress));
});
module.exports = router;
