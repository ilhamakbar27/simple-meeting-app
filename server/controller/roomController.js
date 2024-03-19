const { Room } = require("../models");

class RoomController {
  static async createRoom(req, res, next) {
    try {
      const { roomName, costPerHour } = req.body;
      const room = await Room.create({ roomName, costPerHour });
      res.status(201).json({ message: "Success create new room", room });
    } catch (error) {
      next(error);
    }
  }
  static async getAllRoom(req, res, next) {
    try {
      const rooms = await Room.findAll();
      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }   
  }
}

module.exports = RoomController;
