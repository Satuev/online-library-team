const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.post("/admin", genresController.addGenre); // Добавление жанра
router.get("/", genresController.getAllGenres); // Вывод всех жанров
router.get("/:genreId", genresController.getGenre); // Вывод жанра по ID
router.patch("/admin/genre/:genreId", genresController.patchGenre); // Изменение жанра
router.delete("/admin/genre/:genreId", genresController.deleteGenre); // Удаление жанра

module.exports = router;
