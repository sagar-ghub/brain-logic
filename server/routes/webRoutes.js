const express = require("express");

const router = express.Router();
const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
router.post("/welcome", auth, (req, res) => {
  // const { email, password } = req.body;
  // User.findOne({ email: email }, (err, user) => {
  //   if (user) {
  //     if (password === user.password) {
  //       // res.send({ message: "login sucess", user: user });

  //       res.status(200).json({ message: "login sucess", user: user });
  //     } else {
  //       // res.send({ message: "wrong credentials" });
  //       res.status(400).json({ error: "wrong credentials" });
  //     }
  //   } else {
  //     // res.send("not register");
  //     res.status(400).json({ error: "not register" });
  //   }
  // });

  res.status(200).json({ message: "welcome", user: req.user });
});
module.exports = router;
