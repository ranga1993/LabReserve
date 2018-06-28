var mongoose = require('mongoose');

var ReserveSchema = mongoose.Schema({
    SubjectName: {
        type: String,
        require: true
    },
    SubjectCode: {
        type: String,
        require: true
    },
    StartingTime: {
        type: String,
        require: true
    },
    EndingTime: {
        type: String,
        require: true
    }
});

var Reserve = module.exports = mongoose.model('Reserve', ReserveSchema);