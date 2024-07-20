const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.get('/connect', (req, res) => {
    mongoose.connect("mongodb+srv://23010101661:yagnik123@yagnik.sc2rkml.mongodb.net/").then(() => {
        console.log("Connected")
    });
    res.send("<h1>Home Page using Get!</h1>");
});

app.listen(3000, () => {
    console.log("listening on 3000");
});