const express = require('express');
const mongoose = require('mongoose');
const Faculty = require('./model/Faculty');
const bodyParser = require('body-parser');
const connectionString = 'mongodb+srv://23010101661:yagnik123@yagnik.sc2rkml.mongodb.net/D2D_demo?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(() => {
    console.log("Connected with DB");
    const app = express();

    app.use(bodyParser.urlencoded());

    app.get('/faculty', async (req, res) => {
        const result = await Faculty.find();
        res.send(result);
    })

    app.get('/faculty/:id', async (req, res) => {
        const result = await Faculty.find({ id: req.params.id });
        res.send(result);
    });


    app.delete('/faculty/:id', async (req, res) => {
        const result = await Faculty.deleteOne({ id: req.params.id });
        res.send(result);
    });

    app.put('/faculty', async (req, res) => {
        const result = await Faculty.updateOne({ id: req.body.id }, req.body);
        res.send(result);
    });

    app.post('/faculty', async (req, res) => {
        const result = await Faculty.create(req.body);
        res.send(result);
    });

    app.listen(3000, () => {
        console.log("listening on 3000");
    });
});