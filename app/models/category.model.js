const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
    slug: String,
    description: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('categories', CategorySchema);