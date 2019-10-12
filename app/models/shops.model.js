const mongoose = require('mongoose');

const ShopsSchema = mongoose.Schema({
    name: String,
    slug: String,
    img: String,
    description: String,
    address: String,
    city: String,
    district: String,
    tel: String,
    zipcode: String,
    email: String,
    site: String,
    facebook: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('shops', ShopsSchema);