const mongoose = require('mongoose');

const ShopCategorySchema = mongoose.Schema({
    name: String,
    slug: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('shopscategories', ShopCategorySchema);