const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: {
        type: String,
        unique: true,
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        default: "",
        unique: false,
    }
})

module.exports = {
    model: mongoose.model("users", userSchema),
    userSchema,
} 