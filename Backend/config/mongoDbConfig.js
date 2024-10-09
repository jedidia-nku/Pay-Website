const express = require("express");
const mongoose = require("mongoose");

const dbConfig = async (req, res) => {
    try {
        // Establish a connection to the mongoDb database using mongoose
        console.log("Establishing a connection with the mongodb database...");
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Server connected to the mongodb server successfully :)");

        const connection = mongoose.connection;

        // Listen for connection errors
        connection.on("error", (err) => {
            console.error("Error connection the server to the mongodb server");
        });
    
    } catch (err) {
        console.log("Database connection error:", err);
    }
}

module.exports = dbConfig;