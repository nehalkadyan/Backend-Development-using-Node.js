const express = require("express");
// import user model
const User = require("../models/user.model");

// router
const router = express.Router();

// api endpoint for signup

// HTTP Methods -> GET, POST, PUT/PATCH, DLETE

router.post("/signup", async function (req, res) {
  // logic
  // new change
  // username, email,  password
  try {
    const { username, email, password } = req.body;

    // verify whether the user already exists

    // falsy values - > null, undefined

    const existingUser = await User.findOne({ email });
    /* 
  existingUser = {
    username : "mru",
    email : "mru",
   "password" : "mru"
  }
    */
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // create new user

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    return res.json({ message: "User created successfully", user });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
