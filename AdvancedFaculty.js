const express = require('express');
const mongoose = require('mongoose');
const Faculty = require('./model/Faculty')
const bodyParse = require('body-parser');

const connectionString = 'mongodb+srv://23010101661:yagnik123@yagnik.sc2rkml.mongodb.net/D2D_demo?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(() => {
    console.log("Connected with DB")
});

const app = express();
const recordLimit = 5;

app.use(bodyParse.urlencoded({ extended: true }));

app.get('/faculty', async (req, res) => {
    const result = await Faculty.find();
    res.send(result);
})

app.get('/faculty/search/:searchText', async (req, res) => {
    const regex = new RegExp(req.params.searchText, "i");
    const result = await Faculty.find({
        $or: [
            { FacultyName: regex },
            { FacultyDesignation: regex },
            { FacultyEducationQualification: regex }]
    });
    res.send(result);
})

app.get('/faculty/sorted/', async (req, res) => {
    const regex = new RegExp(req.params.searchText, "i");
    const result = await Faculty.find().sort('FacultyExperience');
    res.send(result);
})

app.get('/faculty/:id/', async (req, res) => {
    const result = await Faculty.findOne({ id: req.params.id });
    res.send(result);
})

app.delete('/faculty/:id/', async (req, res) => {
    const result = await Faculty.deleteOne({ id: req.params.id });
    res.send(result);
})

app.post("/faculty", async (req, res) => {
    const fac = new Faculty(req.body);
    const result = await fac.save();
    res.send(result);
})

app.get("/faculty/page/:pageNO", async (req, res) => {
    let skipNo = recordLimit*(req.params.pageNO-1);
    const result = await Faculty.find().skip(skipNo).limit(recordLimit);
    res.send(result);
})


app.put('/faculty/:id/', async (req, res) => {
    const result = await Faculty.updateOne({ id: req.params.id }, req.body);//Faculty.findOneAndUpdate()
    res.send(result);
})

app.listen(3000, () => {
    console.log("listening on 3000");
});