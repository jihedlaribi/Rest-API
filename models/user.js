const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
 phone: Number,
});
module.exports = mongoose.model("user", userSchema);