// Contains code that signs in a user to the platform
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Validate the request body data
        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: "Invalid or missing credentials"
            });
        }

        // Check that the user exists
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                error: true,
                message: "User not found"
            });
        }

        // Validate the password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(403).json({
                error: true,
                message: "Incorrect password, please try again"
            });
        }

        // Generate a token
        const payload = {
            userId: user._id,
            email: user.email
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "14d" });

        // Return the generated token to the client
        return res.status(200).json({
            status: "success",
            message: "User signed in successfully",
            token: token
        });

    } catch (err) {
        console.log("Error while signing in:", err.message);
        return res.status(500).json({
            error: true,
            message: `Internal Server Error: ${err.message}`
        });
    }
}

module.exports = login;