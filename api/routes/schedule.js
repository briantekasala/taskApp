var express = require("express");
var router = express.Router();
const scheduleList = require("../models/scheduleModel").model;

router.get("/", async (req, res) => {
  console.log(scheduleList)
  await scheduleList.find({}).then((data) => {
    console.log(data);
    res.status(200).send(data);
  });
});

module.exports = router;
