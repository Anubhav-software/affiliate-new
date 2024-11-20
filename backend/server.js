require("dotenv/config");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig.js");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();


const corsOptions = {
  origin: "http://localhost:5173",  
  credentials: true,               
  methods: [ "POST"],  
  allowedHeaders: ["Content-Type", "Authorization"], 
};


app.use(cors(corsOptions));
app.use(cookieParser()); 
app.use(express.json());  
app.use("/api/auth", authRoutes); 
app.use("/api", contactRoutes); 

connectDB(); 
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
