const mongoose = require('mongoose');

const ShopSchema = mongoose.Schema({
    name: String,
    slug: String,
    img: String,
    description: String,
    balise_title: String,
    balise_description: String,
    address: String,
    city: String,
    district: String,
    tel: String,
    zipcode: String,
    email: String,
    website: String,
    facebook: String,
    delivery_location: String,
    category: {
        name: String,
        slug: String
    },
    products: Array,
    favorite: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('shops', ShopSchema);