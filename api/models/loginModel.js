const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  user: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
});

const Login = mongoose.model("Login", LoginSchema);
module.exports.model = Login;
module.exports.schema = LoginSchema;
