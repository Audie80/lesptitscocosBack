const ShopCategory = require('../models/shopcategory.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    // Create a Note
    const shopcategory = new ShopCategory({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description
    });

    // Save Note in the database
    shopcategory.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Find all categories
exports.findAll = (req, res) => {
        ShopCategory.find()
        .then(shopscategories => {
            res.send(shopscategories);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des catégories de commerces."
        });
    });
};

// Find a single category
exports.findOne = (req, res) => {
    ShopCategory.findOne({ 'slug': req.params.shopcategory })
        .then(shopscategories => {
            res.send(shopscategories);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération de cette catégorie de commerces."
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {



};