const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model/Product');
const bodyParser = require('body-parser');

const connectionString = 'mongodb://localhost:27017/Product'

mongoose.connect(connectionString).then(() => {
    console.log("Connected with DB");
    const app = express();

    app.use(bodyParser.urlencoded());

    app.get('/product', async (req, res) => {
        const result = await Product.find();
        res.send(result);
    })

    app.get('/product/:id', async (req, res) => {
        const result = await Product.find({ id: req.params.id });
        res.send(result);
    });


    app.delete('/product/:id', async (req, res) => {
        const result = await Product.deleteOne({ id: req.params.id });
        res.send(result);
    });

    app.put('/product', async (req, res) => {
        const result = await Product.updateOne({ id: req.body.id }, req.body);
        res.send(result);
    });

    app.post('/product', async (req, res) => {
        const result = await Product.create(req.body);
        res.send(result);
    });

    app.listen(3000, () => {
        console.log("listening on 3000");
    });
});