var express = require("express");
var router = express.Router();
const scheduleList = require("../models/scheduleModel").model;

router.get("/", async (req, res) => {
  const todayMonth = new Date();
  const month = todayMonth.getMonth();
  await scheduleList.find({}).then((data) => {
    const filterData = data.filter((dates) => {
      const convertDates = new Date(dates.day);
      if (convertDates.getMonth() === month) return dates.day;
    });

    const sortConvertDates = filterData.sort(
      (date1, date2) =>
        new Date(date1.day).getDate() - new Date(date2.day).getDate()
    );
    console.log(sortConvertDates)
    res.status(200).send(sortConvertDates);
  });
});

module.exports = router;
