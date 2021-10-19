const Book = require("../models/Book.model");

module.exports.booksController = {
  getBooks: async (req, res) => {
    try {
      const bookGet = await Book.find();
      res.json(bookGet);
    } catch (e) {
      res.json(e);
    }
  },
  addBook: async (req, res) => {
    try {
      await Book.create({
        name: req.body.name,
        genre: req.body.genre,
      });
      res.json("Добавлено");
    } catch (e) {
      res.json(e);
    }
  },
  updateBook: async (req, res) => {
    try {
      const bookUpdate = await Book.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json(bookUpdate);
    } catch (e) {
      res.json(e);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await Book.findByIdAndRemove(req.params.id);
      res.json("Удалено");
    } catch (e) {
      res.json(e);
    }
  },
};
