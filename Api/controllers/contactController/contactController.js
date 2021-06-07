const router = require("express").Router();

const ContactModel = require("../../models/ContactModel");
const { HttpError } = require("../../utils/utils");

//create new contact
router.post("/", async (req, res, next) => {
  try {
    const contact = await ContactModel.create({
      name: req.body.name,
      tel: req.body.tel,
    });
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

//get all contacts
router.get("/", async (req, res, next) => {
  try {
    const contact = await ContactModel.find();
    if (!contact) {
      return next(new HttpError(404, "contact not found"));
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

//get contact by id
router.get("/:id", async (req, res, next) => {
  try {
    const contact = await ContactModel.findById(req.params.id);
    if (!contact) {
      return next(new HttpError(404, "contact not found"));
    }
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

//update contact
router.put("/:id", async (req, res, next) => {
  try {
    const contact = await ContactModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        tel: req.body.tel,
      },
      { new: true, useFindAndModify: false, upsert: true }
    );

    res.json(contact);
  } catch (error) {
    next(error);
  }
});

//delete contact
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await ContactModel.deleteOne({ _id: req.params.id });

    res.json({ "deleted contacts": result.deletedCount });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
