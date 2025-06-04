const { name } = require('ejs')
const mongoose = require('mongoose')

// Creating Schema for Teachers list

const teacherSchema = new mongoose.Schema({
    name: String,
    subject: String,
    class: String,
    address: String,
    phone: Number,
});
module.exports = mongoose.model('TeacherSchema', teacherSchema);

