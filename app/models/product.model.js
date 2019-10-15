const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    slug: String,
    img: String,
    balise_description: String,
    balise_description: String,
    description: String,
    weight: Number,
    weight_price: Number,
    price: Number,
    origin: String,
    nutritional: String,
    quantity: Number,
    anti_wasting: Boolean,
    stock: Number,
    category: {
        name: String,
        slug: String,
        subcategory: {
            name: String,
            slug: String
        }
    },
    labels: Array,
    favorite: Array,
    shopping_cart: Array,
}, {
    timestamps: true
});

module.exports = mongoose.model('products', ProductSchema);