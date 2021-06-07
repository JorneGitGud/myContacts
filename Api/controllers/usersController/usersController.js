const router = require("express").Router();

const UserModel = require("../../models/UserModels");
const { HttpError } = require("../../utils/utils");

//create new user
router.post("/", async (req, res, next) => {
  try {
    const user = await UserModel.create({
      name: req.body.name,
      age: req.body.age,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

//get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      return next(new HttpError(404, "user not found"));
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
});

//get user by id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return next(new HttpError(404, "user not found"));
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

//update user
router.put("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        age: req.body.age,
      },
      { new: true, useFindAndModify: false, upsert: true }
    );

    res.json(user);
  } catch (error) {
    next(error);
  }
});

//delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await UserModel.deleteOne({ _id: req.params.id });

    res.json({ "deleted users": result.deletedCount });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
