const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();
router.get("/", booksController.getBooks);
router.get("/:id", booksController.getBookById);
router.get("/genre/:id", booksController.getBooksGenre);
router.post("/admin", booksController.addBook);
router.patch("/user/:userId/book/:bookId/rent", booksController.arendBook);
router.patch("/user/:userId/book/:bookId/passRent", booksController.passBook);
router.patch("/admin/book/:id", booksController.updateBook);
router.patch(
  "/admin/user/:userId/block",
  booksController.userBlock
);
router.delete("/admin/book/:id", booksController.deleteBook);

module.exports = router;
