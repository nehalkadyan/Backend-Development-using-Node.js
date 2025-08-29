const express = require("express");

// router

const router = express.Router();

// api endpoint for signup

router.post("/signup", async function (req, res) {
  // logic
  // new change
  // username, email,  password

  const { username, email, password } = req.body;

  console.log("username", username);
  console.log("email", email);
});

module.exports = router;
