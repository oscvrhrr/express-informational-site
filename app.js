require('dotenv').config();
const express = require('express');
const app = express();
const path = require("node:path");
const PORT = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];


app.locals.messages = messages;

app.use(express.urlencoded({ extended: true }));

const formRoute = require('./routes/form');


app.get('/', (req, res) => {
    res.render('index', {messages})
});

app.use('/new', formRoute);

app.listen(PORT)