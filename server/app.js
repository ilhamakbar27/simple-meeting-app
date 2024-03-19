require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const router = require("./routers");
const ErrorHandler = require("./middleware/errorHandler");


app.get("/", (req, res) => {
    res.status(200).json({
      message: "Welcome to our API!",
      instructions: {
        "/login": "Use this endpoint to login.",
        "/register": "Use this endpoint to register.",
      },
      authenticatedRoutes: {
        message: "The endpoints below require authentication:",
        routes: {
          "/users": "Use this endpoint to get a list of all users.",
          "/clients": "Use this endpoint to get a list of all clients.",
          "/rooms": "Use this endpoint to get a list of all rooms.",
          "/bookings": "Use this endpoint to get a list of all bookings."
        }
      }
    });
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(ErrorHandler);


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});



module.exports = app;
