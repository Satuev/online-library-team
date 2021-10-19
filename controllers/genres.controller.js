const Genre = require("../models/Genre.model");

module.exports.genresController = {
  addGenre: async (req, res) => {
    try {
      await Genre.create({
        name: req.body.name,
      });

      res.json("Жанр добавлен");
    } catch (e) {
      res.json(`Не удалось добавить жанр ${e}`);
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const genres = await Genre.find();

      res.json(genres);
    } catch (e) {
      res.json(`Не удалось вывести жанры ${e}`);
    }
  },
  getGenre: async (req, res) => {
    try {
      const genre = await Genre.findById(req.params.genreId);

      res.json(genre);
    } catch (e) {
      res.json(`Не удалось вывести жанр ${e}`);
    }
  },
  patchGenre: async (req, res) => {
    try {
      await Genre.findByIdAndUpdate(req.params.genreId, {
        name: req.body.name,
      });

      res.json(`Жанр с ID ${req.params.id} изменен`);
    } catch (e) {
      res.json(`Не удалось изменить жанр ${e}`);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.genreId);

      res.json("Жанр удален");
    } catch (e) {
      res.json(`Не удалось удалить жанр ${e}`);
    }
  },
};
