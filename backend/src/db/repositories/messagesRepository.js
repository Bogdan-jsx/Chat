const MessageModel = require("../models/message").MessageModel;

async function addMessage(messageInfo) {
    const newMessage = MessageModel(messageInfo);
    return await newMessage.save();
}

async function getAllMessages() {
    const messages = await MessageModel.find().limit(100);
    console.log(messages);
    return messages;
}

module.exports = {
    addMessage,
    getAllMessages,
}