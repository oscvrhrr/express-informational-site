const db = require('../db/queries');

async function getMessages(req, res) {
    const rows  = await db.getAllMessages();
    res.render("index", { rows });
}



module.exports = {
    getMessages
}
