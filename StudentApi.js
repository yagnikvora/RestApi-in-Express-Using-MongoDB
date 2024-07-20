const express = require('express');
const mongoose = require('mongoose');
const Student = require('./model/Student')
const bodyParser = require('body-parser');

const connectionString = 'mongodb://localhost:27017/Student'

mongoose.connect(connectionString).then(() => {
    console.log("Connected with DB");
    const app = express();

    app.use(bodyParser.urlencoded());

    app.get('/student', async (req, res) => {
        const result = await Student.find();
        res.send(result);
    })

    app.get('/student/:id', async (req, res) => {
        const result = await Student.find({ id: req.params.id });
        res.send(result);
    });


    app.delete('/student/:id', async (req, res) => {
        const result = await Student.deleteOne({ id: req.params.id });
        res.send(result);
    });

    app.put('/student', async (req, res) => {
        const result = await Student.updateOne({ id: req.body.id }, req.body);
        res.send(result);
    });

    app.post('/student', async (req, res) => {
        const result = await Student.create(req.body);
        res.send(result);
    });

    app.listen(3000, () => {
        console.log("listening on 3000");
    });
});