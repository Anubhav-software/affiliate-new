const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("Middleware called");

  
  const token = req.headers["authorization"]?.split(" ")[1]; 

  if (!token) {
    console.log("No token provided.");
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }
  console.log("Token found:", token);

  try {
    console.log("Token found, verifying...");

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    console.log("JWT Verified:", verified);
    console.log("User Email from Token:", verified.email);

    req.user = verified;  

    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(400).json({ message: "Invalid Token." });
  }
};

module.exports = { verifyToken };
