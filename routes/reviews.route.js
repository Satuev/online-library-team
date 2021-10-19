const { Router } = require("express")
const { reviewsController } = require("../controllers/reviews.controller")

const router = Router()

router.post("/user/:userId/book/:bookId/add", reviewsController.addReview)
router.get("/", reviewsController.getAllReviews)
router.delete("/:id", reviewsController.deleteReview)
router.patch("/:id", reviewsController.updateReview)

module.exports = router
