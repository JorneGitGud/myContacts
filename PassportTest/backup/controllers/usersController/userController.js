const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const app = express();
const User = require("./models/user");
require("../../utils/passportConfig")(passport);

app.post("/login", (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("no user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("succesfully authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("user already exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user);
});
