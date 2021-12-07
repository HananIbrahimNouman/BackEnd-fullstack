const mongoose = require("mongoose");

const courseModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("courseModel", courseModel);
