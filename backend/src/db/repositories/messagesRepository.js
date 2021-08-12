const MessageModel = require("../models/message").MessageModel;

async function addMessage(messageInfo) {
    const newMessage = MessageModel(messageInfo);
    return await newMessage.save();
}

module.exports = {
    addMessage,
}