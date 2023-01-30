const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    day: { type: String, require: true },
    nameMicroG: { type: String, require: true },
    nameMicroD: { type: String, require: true },
    microPodium: { type: String, require: true },
    usher: { type: String, require: true },
    sono: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const ScheduleList = mongoose.model("scheduleList", scheduleSchema);
module.exports.model = ScheduleList;
module.exports.schema = scheduleSchema;
