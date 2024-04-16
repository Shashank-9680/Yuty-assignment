const fs = require("fs");
const path = require("path");
const { Image } = require("../model/ImageModel.js");
require("dotenv").config();

exports.uploadImage = async (req, res) => {
  try {
    const base64Data = req.body.imageData.replace(
      /^data:image\/\w+;base64,/,
      ""
    );
    const decodedImage = Buffer.from(base64Data, "base64");
    const filename = Date.now() + "-image.jpg";
    const filePath = path.join(__dirname, "..", "uploads", filename);
    fs.writeFileSync(filePath, decodedImage);
    const name = req.body.name;
    const newImage = new Image({
      imageUrl: `${process.env.BASE_URL}/uploads/${filename}`,
      name: name,
    });
    await newImage.save();

    res
      .status(200)
      .json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
