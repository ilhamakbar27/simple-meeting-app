const router = require("express").Router();
const UserController = require("../controller/userController");
const rooms = require("./room");
const clients = require("./client");
const booking = require("./booking");
const Authentication = require("../middleware/authentication");


router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.use(Authentication);
router.get("/users", UserController.getAllUser);
router.get("/users/:id", UserController.getUserById);

router.use("/room", rooms);
router.use("/client", clients);
router.use("/booking", booking);

module.exports = router;
