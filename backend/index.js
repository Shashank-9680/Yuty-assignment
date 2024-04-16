const express = require("express");
const cors = require("cors");

const connectDB = require("./connection/db.js");
const uploadRoutes = require("./routes/Image.route.js");
const port = 8080;
const app = express();

app.use(cors());
app.use(express.json({ limit: "5Mb" }));
app.use("/uploads", express.static("uploads"));
app.use(uploadRoutes);

connectDB();
app.listen(port, () => {
  console.log("App is running on port " + port);
});
