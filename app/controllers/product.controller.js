const Product = require('../models/product.model.js');



// Create and Save a new Note
// exports.create = (req, res) => {

//    // creation d'une categorie //
//     const product = new Product({
//         name: req.body.name,
//         slug: req.body.slug,
//         img: req.body.img,
//         description: req.body.description,
//         weight: req.body.weight,
//         weight_price: req.body.weight_price,
//         price: req.body.price,
//         origin: req.body.origin,
//         nutritional: req.body.nutritional,
//         quantity: req.body.quantity,
//         anti_wasting: req.body.anti_wasting,
//         stock: req.body.stock,
//         labels: req.body.labels,
//         category: req.body.category,
//         subcategory: req.body.subcategory
//     });

//     // Save Note in the database
//     product.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Note."
//         });
//     });
// }



// Find all products 
exports.findAll = (req, res) => {
        Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des produits."

        });
    });
};

// Find products by category
exports.findByCategory = (req, res) => {
    Product.find({'category.slug': req.params.category})
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des produits par catégorie."

            });
        });
};

// Find products by subcategory
exports.findBySubcategory = (req, res) => {
    Product.find({ 'category.subcategory.slug': req.params.subcategory })
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des produits par sous-catégorie."

            });
        });
};

// Find one product by slug
exports.findOne = (req, res) => {
    Product.findOne({ 'slug': req.params.productslug })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: req.params.productslug + " : ce produit n'existe pas dans la base de données."
                });
            }
            res.send(product);
        }).catch(err => {
            res.status(500).send({
                message: err.message || req.params.productslug + "Erreur de récupération de ce produit."

            });
        });
};

// Find products for one shop
exports.findByShop = (req, res) => {
    Product.find({ 'shop.slug': req.params.shopslug })
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des produits par catégorie."

            });
        });
};

// Find products by search
exports.findBySearch = (req, res) => {
    Product.find({ 'name': { $regex: req.params.search, $options: 'i' }})
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Erreur de récupération des produits par catégorie."

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



// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

