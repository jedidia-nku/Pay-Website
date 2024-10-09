const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Provide your name please"],
        maxLength: 50,
        minLength: 2
    },
    email: {
        type: String,
        required: [true, "Provide your email please"],
        unique: true
    },
    profile_pic: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

// Update the updatedAt field to the current date and time whenever a save actions is triggered
UserSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("User", UserSchema);