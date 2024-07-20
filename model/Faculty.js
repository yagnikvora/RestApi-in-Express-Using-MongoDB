const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    FacultyName: String,
    FacultyDesignation: String,
    FacultyEducationQualification: String,
    FacultyExrkingSince: String,
    FacultyImperience: String,
    FacultyWoage: String,
});

module.exports = mongoose.model('Faculty', schema);

