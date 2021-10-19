const Review = require("../models/Review.model")

module.exports.reviewsController = {
  addReview: async (req, res) => {
    try {
      await Review.create({
        text: req.body.text,
        user: req.params.userId,
        book: req.params.bookId,
      })
      res.json("Отзыв добавлен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find()
      res.json(reviews)
    } catch (e) {
      res.json("Ошибка")
    }
  },
  updateReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id, { $set: req.body })
      res.json("Отзыв изменен")
    } catch (e) {
      res.json("Ошибка")
    }
  },
  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id)
      res.json("Отзыв удален")
    } catch (e) {
      res.json("Ошибка")
    }
  },
}
