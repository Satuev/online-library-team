const { Router } = require("express");
const { booksController } = require("../controllers/books.controller");

const router = Router();
router.get("/", booksController.getBooks);
router.post("/admin", booksController.addBook);
router.patch("/admin/book/:id", booksController.updateBook);
router.delete("/admin/book/:id", booksController.deleteBook);

module.exports = router;
