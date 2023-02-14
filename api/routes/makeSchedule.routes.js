var express = require("express");
var router = express.Router();

const scheduleList = require("../models/scheduleModel").model;

router.post("/", async (req, res) => {
  console.log(req.body);

  const data = new scheduleList({
    day: req.body.day,
    nameMicroG: req.body.nameMicroG,
    nameMicroD: req.body.nameMicroD,
    microPodium: req.body.microPodium,
    usher: req.body.usher,
    sono: req.body.sono,
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
