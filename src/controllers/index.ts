import usersController from "./usersController";

export default function controllers(app) {
    app.use("/user", usersController);
}