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

  static async getRoomById(req, res, next) {
    try {
      const { id } = req.params;
      const room = await Room.findByPk(id);
      if (!room) {
        throw "Not found";
      }
      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  }

  static async deleteRoom(req, res, next) {
    try {
      const { id } = req.params;
      const room = await Room.destroy({ where: { id } });
      if (!room) {
        throw "Not found";
      }
      res.status(200).json({ message: "Success delete room" });
    } catch (error) {
      next(error);
    }
  }
  static async updateRoom(req, res, next) {
    try {
      const { id } = req.params;
      const { roomName, costPerHour } = req.body;
      const room = await Room.update(
        { roomName, costPerHour },
        { where: { id } }
      );
      if (!room) {
        throw "Not found";
      }
      res.status(200).json({ message: "Success update room" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoomController;
