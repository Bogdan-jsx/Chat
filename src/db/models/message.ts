import mongoose, { Schema } from "mongoose";

export interface MessageAttr {
    message: string,
    author: string,
    sendTime: Date,
}

const messageSchema = new Schema({
    message: String,
    author: String,
    sendTime: {
        type: Date,
        default: new Date(),
    }
})

export const MessageModel = mongoose.model<MessageAttr>("user", messageSchema);