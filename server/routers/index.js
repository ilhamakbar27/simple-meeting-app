const router = require("express").Router();
const UserController = require("../controller/userController");
const rooms = require("./room");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/users", UserController.getAllUser);

router.use("/room", rooms)

module.exports = router;
