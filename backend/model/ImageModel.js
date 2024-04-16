const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

exports.Image = mongoose.model("Image", imageSchema);
