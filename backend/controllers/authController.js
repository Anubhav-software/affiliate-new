const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../models/User.js");
const crypto = require("crypto");

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "false",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // SSL certificate validation hata raha hai
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP for Login",
    text: `Your OTP for login is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully");
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};

const registerUser = async (req, res) => {
  const {
    fullName,
    email,
    mobile,
    password,
    confirmPassword,
    aadharNumber,
    panNumber,
    accountNumber,
    ifscCode,
    bankName,
    branchName,
    upiId,
      } = req.body;
  const panImage = req.files.panFront[0].filename;
  const aadharImages = [
    req.files.aadharFront[0].filename,
    req.files.aadharBack[0].filename,
  ];

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Password and confirm password do not match." });
  }

  const hashedPassword = await bcrypt.hash(password, 15);

  const user = new User({
    fullName,
    email,
    mobile,
    password: hashedPassword,
    panImages: [panImage],
    panNumber,
    aadharNumber,
    aadharImages,
    accountNumber,
    ifscCode,
    bankName,
    branchName,
    upiId,
  });

  try {
    await user.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 3600000,
    });

    res.status(201).json({ message: "Registration successful", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "User cannot be Registered , Please try again", error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("Request Body:", req.body); 

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required." });
  }

 
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found." });
  }

  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Invalid password." });
  }

  
  const otp = crypto.randomInt(100000, 999999).toString();
  user.otp = otp;
  await user.save();

  
  try {
    await sendOTP(user.email, otp);
    console.log("OTP sent successfully to:", user.email);
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res
      .status(500)
      .json({ message: "Error sending OTP. Please try again later." });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 3600000,
  });

  res.status(200).json({
    message: "OTP sent to email. Please check your inbox.",
    token,
  });
};

const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const email = req.user.email;

  console.log("Received request to verify OTP:", { email, otp });

  const user = await User.findOne({ email });

  if (!user) {
    console.log("No user found with this email");
    return res.status(400).json({ message: "User not found." });
  }

  console.log("Stored OTP in DB:", user.otp);

  if (user.otp !== otp) {
    console.log("OTP mismatch: expected", user.otp, "but got", otp);
    return res.status(400).json({ message: "Invalid OTP." });
  }

  user.otp = null;
  await user.save();

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 24 * 3600000, // 1 day
  });

  console.log("OTP successfully verified, login successful.");

  res.status(200).json({ message: "Login successful", token });
};

module.exports = { registerUser, loginUser, verifyOTP };
