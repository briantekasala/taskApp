var express = require("express");
var router = express.Router();

const Login = require("../models/loginModel").model;

router.post("/", async (req, res) => {
  let user = req.body.user;
  let password = req.body.password;
  let email = req.body.email;
  let data = new Login({
    user: user,
    password: password,
    email: email,
  });
  data.save((err) => {
    if (err) {
      res.status(400).send("error saving new data");
    } else {
      console.log("Created new data");
      res.status(200).send("Created new data");
    }
  });
});

module.exports = router;
