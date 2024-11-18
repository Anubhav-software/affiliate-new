// authMiddleware.js (CommonJS)
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("JWT Verified:", verified);
    console.log("User Email from Token:", verified.email);

    req.user = { email: verified.email };
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = { verifyToken };  // Export using CommonJS
