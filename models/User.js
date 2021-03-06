const mongoose = require('mongoose');

// Defines the User model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

// Defines the collection
module.exports = mongoose.model('users', UserSchema);