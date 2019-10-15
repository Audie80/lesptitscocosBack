const ProductCategory = require('../models/productcategory.model.js');

// Find all categories
exports.findAll = (req, res) => {
        ProductCategory.find()
        .then(productscategories => {
            res.send(productscategories);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
        });
    });
};