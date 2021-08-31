const UserModel = require("../models/user").model;

async function addUser(userInfo) {
    const newUser = UserModel(userInfo);
    return await newUser.save();
}

async function getUserByEmail(email) {
    return await UserModel.findOne({ email });
}

async function getUserById(id) {
    return await UserModel.findById(id);
}

async function updateUser(id, newInfo) {
    return await UserModel.findByIdAndUpdate(id, newInfo, { new: true })
}

module.exports = {
    addUser,
    getUserByEmail,
    getUserById,
    updateUser,
}