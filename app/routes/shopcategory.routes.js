module.exports = (app) => {
    const shopscategories = require('../controllers/shopcategory.controller.js');

    //Create a new Note
    app.post('/categories', shopscategories.create);

    // Find all categories
    app.get('/api/categories', shopscategories.findAll);

    // Retrieve a single category
    app.get('/api/categories/:shopcategory', shopscategories.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}