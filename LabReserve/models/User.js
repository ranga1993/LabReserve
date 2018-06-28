var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
       type: String,
       require: true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
});

var User = module.exports = mongoose.model('User', UserSchema);