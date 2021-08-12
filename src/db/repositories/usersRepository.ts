import { UserModel, UserAttr } from "../models/user";

export async function addUser(userInfo: UserAttr) {
    const newUser = new UserModel(userInfo);
    return await newUser.save();
}