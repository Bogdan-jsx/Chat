import mongoose, { Schema } from "mongoose";

export interface UserAttr {
    name: string,
    email: string,
    password: string,
    avatar?: string,
    id: string,
}

const userSchema = new Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true,
    },
    avatar: {
        type: Schema.Types.ObjectId,
        default: "",
    },
    id: {
        type: String,
        unique: true,
    }
})

export const UserModel = mongoose.model<UserAttr>("user", userSchema);