module.exports = (app) => {
    const incidencias = require('../controllers/incidencia.controller.js');

    // Create a new incidencias
    app.post('/incidencias', incidencias.create);

    // Retrieve all incidencias
    app.get('/incidencias', incidencias.findAll);

    // Retrieve a single incidencias with incidenciaId
    app.get('/incidencias/:incidenciaId', incidencias.findOne);

    // Update a incidencias with incidenciaId
    app.put('/incidencias/:incidenciaId', incidencias.update);

    // Delete a incidencias with incidenciaId
    app.delete('/incidencias/:incidenciaId', incidencias.delete);
}