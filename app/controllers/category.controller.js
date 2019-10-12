const Category = require('../models/category.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

    // Create a Note
    const category = new Category({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description
    });

    // Save Note in the database
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
        Category.find()
        .then(categories => {
            res.send(categories);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {



};







// Find a single note with a noteId
//exports.findOne = (req, res) => {

//};