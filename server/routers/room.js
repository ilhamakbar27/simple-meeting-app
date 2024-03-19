const router = require("express").Router();
const RoomController = require("../controller/roomController");

router.post("/", RoomController.createRoom);
router.get("/", RoomController.getAllRoom);


module.exports = router;
