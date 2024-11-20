const express = require("express");
const { handleContactForm } = require("../controllers/contactController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Protecting this route using verifyToken middleware
router.post("/contact", verifyToken, handleContactForm);

module.exports = router;
