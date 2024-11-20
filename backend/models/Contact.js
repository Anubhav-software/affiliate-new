const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  businessName: { type: String, maxlength: 100 },
  businessType: { type: String, maxlength: 100 },
  message: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
