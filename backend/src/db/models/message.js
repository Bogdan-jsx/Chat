const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: String,
    author: { type: mongoose.Types.ObjectId, ref: "users", autopopulate: { select: "username avatar -_id" } },
    sendTime: {
        type: Date,
        default: new Date(),
    }
})

messageSchema.plugin(require("mongoose-autopopulate"));

module.exports = {
    MessageModel: mongoose.model("messages", messageSchema),
} 