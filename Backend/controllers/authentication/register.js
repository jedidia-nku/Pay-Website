// Contains the functionality to register a user
const User = require("../../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const { name, email, password, profile_pic } = req.body;
    try {
        // Validate the request body data
        if (!name || !email || !password) {
            return res.status(400).json({
                error: true,
                message: "Invalid or missing credentials"
            });
        }

        // Check that the user is not already registered on the platform
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(409).json({
                error: true,
                message: "User already exists"
            });
        }

        // Hash the password before storing
        const hashedPwd = await bcrypt.hash(password, 10);

        // Register the user to the platform
        const newUser = new User({
            name,
            email,
            password: hashedPwd,
            profile_pic
        });

        // Return a response to the client
        return res.status(201).json({
            status: "success",
            message: "User successfully registered",
            data: newUser
        });

    } catch (err) {
        console.log("Error registering a user:", err.message);
        return res.status(500).json({
            error: true,
            message: `Internal Server Error: ${err.message}`
        });
    }
}

module.exports = register;