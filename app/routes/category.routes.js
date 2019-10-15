module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');

    //Create a new Note
    app.post('/categories', categories.create);

    // Find all categories
    app.get('/api/categories', categories.findAll);

    // Retrieve a single category
    app.get('/api/categories/:category', categories.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}