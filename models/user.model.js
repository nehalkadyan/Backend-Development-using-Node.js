// mongoose
// import
const mongoose = require("mongoose");
// schema
const userSchema = new mongoose.Schema(
  {
    // fields
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// model

const User = mongoose.model("User", userSchema);
module.exports = User;
