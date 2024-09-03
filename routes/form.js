const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('form')
});

router.post('/', (req, res) => {
    const {message, author} = req.body
    const messages = req.app.locals.messages;
    messages.push({text: message, user: author, added: new Date()});
    res.redirect('/')
});



module.exports = router