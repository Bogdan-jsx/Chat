const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true,
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        default: "",
    },
    id: {
        type: String,
        unique: true,
    }
})

module.exports = {
    UserMode: mongoose.model("user", userSchema),
} 