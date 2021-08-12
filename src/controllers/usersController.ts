import { Router } from "express";
import passport from "passport";
import * as userRepository from "../db/repositories/usersRepository";
import * as imagesRepository from "../db/repositories/imagesRepository";
// import multer from "multer";
// var storage = multer.memoryStorage();
// var upload = multer({ storage: storage });

const router = Router();

router.post("/register"/*, upload.single("avatarImg")*/, async (req, res) => {
    const { name, password, email, id } = req.body;
    let avatar = undefined;
    // if (req.file) {
    //     avatar = await imagesRepository.createFile(req);
    // }
    await userRepository.addUser({ name, password, email, avatar, id });
    res.status(200);
})

router.post("/login", passport.authenticate("local", {}, () => {}), async (req, res) => {

})

export default router;