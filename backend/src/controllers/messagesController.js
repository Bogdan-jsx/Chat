const express = require("express");
const messagesRepository = require("../db/repositories/messagesRepository");

const router = express.Router();

router.get("/", async (req, res) => {
    const messages = await messagesRepository.getAllMessages();
    res.json(messages);
})

module.exports = router;