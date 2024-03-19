require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routers");
const ErrorHandler = require("./middleware/errorHandler");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



module.exports = app;
