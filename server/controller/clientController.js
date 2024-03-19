const { Client } = require("../models");

class ClientController {
  static async createClient(req, res, next) {
    try {
      const { name, email, phone, credit } = req.body;
      const client = await Client.create({ name, email, phone, credit });
      res.status(201).json({ message: "Success create new client", client });
    } catch (error) {
      next(error);
    }
  }

  static async getAllClient(req, res, next) {
    try {
      const clients = await Client.findAll();
      res.status(200).json(clients);
    } catch (error) {
      next(error);
    }
  }
  static async getClientById(req, res, next) {
    try {
      const id = req.params.id;
      const client = await Client.findByPk(id);
      if (!client) {
        throw "Not found";
      }
      res.status(200).json(client);
    } catch (error) {
      next(error);
    }
  }
  static async deleteClient(req, res, next) {
    try {
      const { id } = req.params;
      const client = await Client.destroy({ where: { id } });
      if (!client) {
        throw "Not found";
      }
      res.status(200).json({ message: "Success delete client" });
    } catch (error) {
      next(error);
    }
  }

  static async updateClient(req, res, next) {
    try {
      const { id } = req.params;
      const client = await Client.findByPk(id);
      if (!client) {
        throw "Not found";
      }
      await Client.update(req.body, { where: { id } });
      res.status(200).json({ message: "Success update client" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ClientController;
