const { User, Client } = require("../models");
const { compare } = require("../utils/hash");
const { createToken } = require("../utils/token");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      res.status(201).json({
        message: "Success create new user",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getAllUser(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const user = await User.findByPk(id);
      if (!user) {
        throw "Not found";
      }
      res.status(200).json(user);
    } catch (error) {
      // console.log(error)
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      const client = await Client.findOne({ where: { email } });
      
      const account = user || client;

      if (!account) throw "Invalid credentials";

      const correctUser = compare(password, account.password);

        console.log(account.password)

      if (correctUser) {
        const payload = {
          id: account.id,
          email: account.email,
          name: account.name,
          isUser: Boolean(user),
        };
        const access_token = createToken(payload);
        res.status(200).json({ message: "Login Success", access_token });
      } else {
        throw "Invalid credentials";
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
