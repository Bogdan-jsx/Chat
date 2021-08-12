const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: String,
    author: String,
    sendTime: {
        type: Date,
        default: new Date(),
    }
})

module.exports = {
    MessageModel: mongoose.model("user", messageSchema),
} 