//user schema
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  branch: String,
  year: String,
  mobile: String,
  birthday: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
