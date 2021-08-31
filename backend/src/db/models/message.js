const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: String,
    authorName: String,
    authorId: mongoose.Types.ObjectId,
    sendTime: {
        type: Date,
        default: new Date(),
    }
})

module.exports = {
    MessageModel: mongoose.model("messages", messageSchema),
} 