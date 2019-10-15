module.exports = (app) => {
    const productsCategories = require('../controllers/productcategory.controller.js');

    // Find all categories
    app.get('/api/categoriesproduits', productsCategories.findAll);
}