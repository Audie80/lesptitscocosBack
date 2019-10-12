module.exports = (app) => {
    const shops = require('../controllers/shops.controller.js');


    // Retrieve all Notes
    app.get('/api/commerces/:shops', shops.findAll);

    // Retrieve all Notes
    app.get('/api/commerces/:shops/:shopid', shops.findAll);


    // Retrieve all Notes
    app.get('/api/admin/commerces/types_commerces', shops.findAll);

    // Create a new Note
    app.create('/api/admin/commerces/types_commerces/create', shops.create);

    // Update a new Note
    app.put('/api/admin/commerces/types_commerces/update', shops.update);

    // delete a new Note
    app.delete('/api/admin/commerces/types_commerces/delete', shops.delete);

    // find all
    app.get('/api/admin/commerces/boutiques', shops.findAll);

    // create a new shops
    app.post('/api/commerces/boutiques/create', shops.create);

    // update a new shops
    app.put('/api/commerces/boutiques/update', shops.update);

    // delete a new shops
    app.delete('/api/commerces/boutiques/delete', shops.delete);



    // Retrieve a single Note with noteId
   // app.get('/category/:categoryId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}