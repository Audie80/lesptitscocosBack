const Product = require('../models/product.model.js');



// Create and Save a new Note
exports.create = (req, res) => {

   // creation d'une categorie //
    const product = new Product({
        name: req.body.name,
        slug: req.body.slug,
        img: req.body.img,
        description: req.body.description,
        weight: req.body.weight,
        weight_price: req.body.weight_price,
        price: req.body.price,
        origin: req.body.origin,
        nutritional: req.body.nutritional,
        quantity: req.body.quantity,
        anti_wasting: req.body.anti_wasting,
        stock: req.body.stock,
        labels: req.body.labels,
        category: req.body.category,
        subcategory: req.body.subcategory
    });

    // Save Note in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}



// Recupere et montre toutes les categories de la BDD // 
exports.findAll = (req, res) => {
        Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."

        });
    });
};



// Supprime les sous categorie avec l'id specifié //

exports.delete = (req, res) => {
    Product.findOne({'subcategory': req.params.sous_categories})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Sous categorie non trouvé avec cet ID" + req.params.sous_categories
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Sous categories avec l'id non trouvé " + req.params.sous_categories
            });
        }
        return res.status(500).send({
            message: "Impossible de supprimer la sous categorie avec cet id " + req.params.sous_categories
        });
    });

};

// Trouver un produit //

exports.findAll = (req, res) => {
    Product.findById(req.params.productsid)
    then(product => {
        if(!product) {
            return res.status(404).send({
                message: "produits not found with id " + req.params.productsid
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.productsid
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.productsid
        });
    });

};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

