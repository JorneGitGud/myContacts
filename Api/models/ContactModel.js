const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  tel: String,
});

const ContactModel = mongoose.model("contacts", contactSchema);

module.exports = ContactModel;
