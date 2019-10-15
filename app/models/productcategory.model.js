const mongoose = require('mongoose');

const ProductCategorySchema = mongoose.Schema({
    name: String,
    slug: String,
    subcategories: Array,
}, {
    timestamps: true
});

module.exports = mongoose.model('productscategories', ProductCategorySchema);