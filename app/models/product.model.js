const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    slug: String,
    img: String,
    description: String,
    weight: String,
    weight_price: String,
    price: String,
    origin: String,
    nutritional: String,
    quantity: String,
    anti_wasting: String,
    stock: String,
    labels: String,
    category: String,
    subcategory: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('products', ProductSchema);