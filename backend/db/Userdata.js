const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  name: String,
  email: String,
  Occupation: String,
  mobile: String,
  contact: String,
  sex: String,
  religion: String,
  blood: String,
  marriage: String,
  govt_id_type: String,
  govt_id_data: String,

  guardian_guard: String,
  guardian_guardname: String,

  DOB: String,
  country: String,
});

module.exports = mongoose.model("personal_details", testSchema);
