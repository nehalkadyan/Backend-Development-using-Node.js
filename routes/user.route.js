const express = require("express");
// user model
const User = require("../models/user.model");
const router = express.Router();

// endpoint

router.get("/users", async function (req, res) {
  try {
    // fetch all users

    const users = await User.find();

    return res.json({ message: "Users successfully fetched", users });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
