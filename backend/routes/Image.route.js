const express = require("express");
const router = express.Router();

const uploadController = require("../controllers/UploadController.js");

router.post("/api/upload", uploadController.uploadImage);

module.exports = router;
