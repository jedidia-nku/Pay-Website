// Authentication routes
const express = require("express");
const router = express.Router();

const register = require("../controllers/authentication/register");
const login = require("../controllers/authentication/login");

/**
 * Registers a user to the platform
 * URL: http://localhost:5050/api/auth/register
 */
router.post("/register", register);

/**
 * logs a user into the platform
 * URL: http://localhost:5050/api/auth/login
 */
router.post("/login", login);


module.exports = router;