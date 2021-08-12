import { MessageModel, MessageAttr } from "../models/message";

export async function addMessage(messageInfo: MessageAttr) {
    const newMessage = new MessageModel(messageInfo);
    return await newMessage.save();
}