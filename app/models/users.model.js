const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    tel: String,
    email: String,
    birthday: String,
    household_composition: String,
    password: String,
    roles: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('users', UsersSchema);