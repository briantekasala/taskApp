var express = require("express");
var router = express.Router();
const scheduleList = require("../models/scheduleModel").model;

router.get("/", function (req, res,) {
  scheduleList.find({}).then((data) => {
    console.log(data)
    res.status(200).send(data);
  });
});

module.exports = router;
