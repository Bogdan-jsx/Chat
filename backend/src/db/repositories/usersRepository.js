const UserModel = require("../models/user").UserModel;

async function addUser(userInfo) {
    const newUser = UserModel(userInfo);
    return await newUser.save();
}

async function getUserByEmail(email) {
    return await UserModel.findOne({ email });
}

module.exports = {
    addUser,
    getUserByEmail,
}