const express = require("express");
const passport = require("passport");
const userRepository = require("../db/repositories/usersRepository");
const imagesRepository = require("../db/repositories/imagesRepository");
const multer = require("multer")

const upload = multer({ storage: multer.memoryStorage() })

const router = express.Router();

router.post("/register", upload.single("avatarImg"), async (req, res) => {
    const { username, password, email } = req.body;
    let avatar = undefined;
    const file = req.file;
    if (file) {
        avatar = await imagesRepository.createFile({ file });
    }
    await userRepository.addUser({ username, password, email, avatar });
    res.sendStatus(200);
})

router.post("/login", passport.authenticate("local"), async (req, res) => {
    const { email } = req.body;
    const user = await userRepository.getUserByEmail(email);
    res.status(200).json(user);
})
router.get("/logout", (req, res) => {
    req.logOut;
    res.sendStatus(200);
})
router.get("/avatar/:id", async (req, res) => {
    const { id } = req.params;
    await imagesRepository.findFile(id, res);
})

module.exports = router;