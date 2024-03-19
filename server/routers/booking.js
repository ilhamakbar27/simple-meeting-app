const router = require("express").Router();

const BookingController = require("../controller/bookingController");

router.post("/", BookingController.createBooking);
router.get("/", BookingController.getAllBooking);
router.get("/:id", BookingController.getBookingById);
router.delete("/:id", BookingController.deleteBooking);
router.put("/:id", BookingController.updateBooking);

module.exports = router;
