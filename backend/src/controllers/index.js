const usersController = require("./usersController");

module.exports = function (app) {
    app.use("/user", usersController);
}