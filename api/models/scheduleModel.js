const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    day: { type: String, required: true },
    nameMicroG: { type: String, required: true },
    nameMicroD: { type: String, required: true },
    microPodium: { type: String, required: true },
    usher: { type: String, required: true },
    sono: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ScheduleList = mongoose.model("scheduleList", scheduleSchema);
module.exports.model = ScheduleList;
module.exports.schema = scheduleSchema;
