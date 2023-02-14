var express = require("express");
var router = express.Router();

const Login = require("../models/loginModel").model;

router.post("/", async (req, res) => {
  let user = req.body.user;
  let password = req.body.password;

  if (user && password) {
    const result = await Login.find({ user: user, password: password }).exec();
    if (result) {
      res.send(result);
    } else {
      res.send([]);
    }
  } else {
    res.send("input can't be blank");
  }
});

module.exports = router;
