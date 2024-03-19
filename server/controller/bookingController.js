const { RoomUsage } = require("../models");

class BookingController {
  static async createBooking(req, res, next) {
    try {
      const { RoomId, ClientId, startTime, endTime, bookingDate, quotaUsed } =
        req.body;
      const booking = await RoomUsage.create({
        RoomId,
        ClientId,
        startTime,
        endTime,
        bookingDate,
        quotaUsed,
      });
      res.status(201).json({ message: "Success create new booking", booking });
    } catch (error) {
        next(error);
    }
}
static async getAllBooking(req, res, next) {
    try {
        const bookings = await RoomUsage.findAll();
        console.log(bookings, "ini booking")
      res.status(200).json(bookings);
    } catch (error) {
      next(error);
    }
  }

  static async getBookingById(req, res, next) {
    try {
      const { id } = req.params;
      const booking = await RoomUsage.findByPk(id);
      if (!booking) {
        throw "Not found";
      }
      res.status(200).json(booking);
    } catch (error) {
      next(error);
    }
  } 
  static async deleteBooking(req, res, next) {
    try {
      const { id } = req.params;
      const booking = await RoomUsage.destroy({ where: { id } });
      if (!booking) {
        throw "Not found";
      }
      res.status(200).json({ message: "Success delete booking" });
    } catch (error) {
      next(error);
    }
  }
  static async updateBooking(req, res, next) {
    try {
    const {id} = req.params;
    const {RoomId, ClientId, startTime, endTime, bookingDate, quotaUsed} = req.body;
    const booking = await RoomUsage.update({RoomId, ClientId, startTime, endTime, bookingDate, quotaUsed}, {where: {id}});
    if (!booking) {
        throw "Not found";
    }
    res.status(200).json({ message: "Success update booking" });
    } catch (error) {
       next(error); 
    }
  }
}

module.exports = BookingController;
