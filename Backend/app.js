const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
PORT = process.env.PORT || 5050;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// API Endpoints


// Test route
app.get("/", (req, res) => {
    return res.status(200).json("Hello and welcome to PulsePay");
});

// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});