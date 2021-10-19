const User = require("../models/User.model")

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
      })
      res.json("Пользователь добавлен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      res.json("Ошибка")
    }
  },
  updateUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, { $set: req.body })
      res.json("Пользователь изменен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id)
      res.json("Пользователь удален")
    } catch (e) {
      res.json("Ошибка")
    }
  },
}