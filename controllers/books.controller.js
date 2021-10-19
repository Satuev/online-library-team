const Book = require("../models/Book.model");
const User = require("../models/User.model");

module.exports.booksController = {
  getBooks: async (req, res) => {
    try {
      const bookGet = await Book.find();
      res.json(bookGet);
    } catch (e) {
      res.json(e);
    }
  },
  getBooksGenre: async (req, res) => {
    try {
      const bookGenre = await Book.find({ genre: req.params.id });
      res.json(bookGenre);
    } catch (e) {
      res.json(e);
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
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
  arendBook: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      const book = await Book.findById(req.params.bookId);
      if (user.isBlocked) {
        return res.json("Вы заблокированы");
      }
      if (book.isArend) {
        return res.json("Книга уже арендовано");
      }

      if (user.books.length >= 3) {
        return res.json("Невозможно добавить больше 3 книг");
      }

      await User.findByIdAndUpdate(req.params.userId, {
        $push: { books: req.params.bookId },
      });

      await Book.findByIdAndUpdate(req.params.bookId, {
        user: req.params.userId,
        isArend: true,
      });
      res.json("Книга арендована");
    } catch (e) {
      res.json(e);
    }
  },
  passBook: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.userId, {
        $pull: { books: req.params.bookId },
      });
      await Book.findByIdAndUpdate(req.params.bookId, {
        isArend: false,
        user: "",
      });
    } catch (e) {
      res.json(e);
    }
  },
  userBlock: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.userId, {
        books: [],
        isBlocked: true,
      });
      await Book.findByIdAndUpdate(req.params.bookId, {
        user: "",
        isBlocked: false,
      });
      res.json("Пользователь успешно заблокирован");
    } catch (e) {
      res.json(e);
    }
  },
};
