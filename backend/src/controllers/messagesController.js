const express = require("express");
const messagesRepository = require("../db/repositories/messagesRepository");

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("getting messages...");
    const messages = await messagesRepository.getAllMessages();
    console.log(messages);
    res.json(messages);
})

module.exports = router;