require('dotenv').config();
const express = require('express');
const app = express();
const path = require("node:path");
const PORT = 3000
const messageController = require("./controllers/messagesController")


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(express.urlencoded({ extended: true }));

const formRoute = require('./routes/form');


app.get('/', (req, res) => {
  messageController.getMessages(req,res);
});

app.use('/new', formRoute);

app.listen(PORT)