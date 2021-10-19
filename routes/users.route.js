const { Router } = require("express")
const { usersController } = require("../controllers/users.controller")

const router = Router()

router.post("/", usersController.addUser)
router.get("/", usersController.getUsers)
router.patch("/:id", usersController.updateUser)
router.delete("/:id", usersController.deleteUser)

module.exports = router