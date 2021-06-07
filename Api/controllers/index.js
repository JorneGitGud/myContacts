const router = require("express").Router();
const userController = require("./usersController/usersController");

router.use("/users", userController);

module.exports = router;
