const mongoose = require('mongoose');

const DeliveryLocationSchema = mongoose.Schema({
    name: String,
    address: String,
    zipcode: String,
    city: String,
    tel: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('delivery_location', DeliveryLocationSchema);