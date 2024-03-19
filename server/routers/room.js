const router = require("express").Router();
const RoomController = require("../controller/roomController");

router.post("/", RoomController.createRoom);
router.get("/", RoomController.getAllRoom);
router.get("/:id", RoomController.getRoomById);
router.delete("/:id", RoomController.deleteRoom);
router.put("/:id", RoomController.updateRoom);


module.exports = router;
