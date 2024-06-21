const express = require('express');
const app = express();


app.set("view engine", "ejs")


app.get ('/', (req, res, next) => {
  
    res.render("index", {user: "oscar"})
})

app.get('/about', (req, res, next) => {
    res.render("about", {user: "oscar"} )
})

app.get('/contact', (req, res, next) => {
    res.render("contact", {dog: "olive"})
} )

app.listen(3000)