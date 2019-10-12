const Users = require('../models/users.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

   // Create a Note
    const users = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tel: req.body.tel,
        email: req.body.email,
        birthday: req.body.birthday,
        household_composition: req.body.household_composition,
        password: req.body.password,
        roles: req.body.roles,
    });

    // Save Note in the database
    users.save()
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
        Users.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

        });
    });
};

// Find a single note with a noteId
//exports.findOne = (req, res) => {

//};

// Update a note identified by the noteId in the request
//exports.update = (req, res) => {

//};

// Delete a note with the specified noteId in the request
//exports.delete = (req, res) => {

//};

