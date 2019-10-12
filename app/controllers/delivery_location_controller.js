const DeliveryLocation = require('../models/delivery_Location.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

   // Create a Note
    const deliveryLocation = new DeliveryLocation({
        name: req.body.name,
        address: req.body.address,
        zipcode: req.body.zipcode,
        city: req.body.city,
        tel: req.body.tel,
    });

    // Save Note in the database
    deliveryLocation.save()
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
        DeliveryLocation.find()
        .then(deliveryLocation => {
            res.send(deliveryLocation);
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

