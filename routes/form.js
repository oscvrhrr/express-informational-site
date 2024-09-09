const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messagesController')


router.get('/', (req, res) => {
    res.render('form')
});

router.post('/', (req, res) => {
    messageController.createMessagePost(req, res)
});



module.exports = router