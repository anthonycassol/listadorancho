const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ListaController = require('./controllers/ListaController');
const ProdutosController = require('./controllers/ProdutosController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.post('/usuario', UsuarioController.create);

routes.post('/listas', ListaController.create);
routes.get('/listas', ListaController.index);
routes.put('/listas', ListaController.put);


routes.post('/produtos', ProdutosController.create);
routes.get('/produtos', ProdutosController.index);
routes.put('/produtos', ProdutosController.put);

module.exports = routes;