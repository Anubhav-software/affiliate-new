const Contact = require("../models/Contact");

const handleContactForm = async (req, res) => {
  const { name, email, phone, businessName, businessType, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Name, Email, Phone, and Message are required." });
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: "Invalid phone number format. Please enter a 10-digit phone number." });
  }

  if (businessName && businessName.length > 100) {
    return res.status(400).json({ message: "Business Name cannot exceed 100 characters." });
  }

  if (businessType && businessType.length > 100) {
    return res.status(400).json({ message: "Business Type cannot exceed 100 characters." });
  }

  if (message.length < 10) {
    return res.status(400).json({ message: "Message should be at least 10 characters long." });
  }

  try {
    // Create contact form without userId
    const newContact = new Contact({
      name,
      email,
      phone,
      businessName,
      businessType,
      message
    });

    await newContact.save();
    res.status(200).json({ message: "Contact form submitted successfully." });
  } catch (error) {
    console.error("Error saving contact form: ", error);
    res.status(500).json({ message: "Error submitting contact form. Please try again later." });
  }
};

module.exports = { handleContactForm };
