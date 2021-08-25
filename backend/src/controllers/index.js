const usersController = require("./usersController");
const messagesController = require("./messagesController");

module.exports = function (app) {
    app.use("/user", usersController);
    app.use("/messages", messagesController);
}