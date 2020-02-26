const { User } = require("../models");

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {}

  async store(req, res) {}

  async update(req, res) {}

  async destroy(req, res) {}
}
