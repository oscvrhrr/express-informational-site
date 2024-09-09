const db = require('../db/queries');

async function getMessages(req, res) {
    const rows  = await db.getAllMessages();
    res.render("index", { rows });
}

async function createMessagePost(req, res) {
    const { author, message } = req.body
    await db.createNewMessage(author, message);
    res.redirect("/")
}



module.exports = {
    getMessages,
    createMessagePost,
}
