const { User } = require("../models");
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
      //   res.status(500).json(error.errors[0]);
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

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      const correctUser = compare(password, user.password);

      if (correctUser) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
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
