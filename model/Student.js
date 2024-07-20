const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    StudentName: String,
    StudentCity: String,
    StudentDepartment: String,
    StudentSem: String,
});

module.exports = mongoose.model('Student', schema);

