const router = require("express").Router();
const userController = require("./usersController/usersController");
const contactController = require("./contactController/contactController");

router.use("/users", userController);
router.use("/contacts", contactController);

module.exports = router;
