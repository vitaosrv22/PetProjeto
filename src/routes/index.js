const {Router} = require('express');
const routes = new Router();
const homeController = require('../controllers/home.controller');
const formController = require('../controllers/form.controller');
const internalProductController = require('../controllers/internalProduct.controller');

// Página Inicial
routes.get('/', homeController.list);

// Formulário
routes.get('/contato', formController.list);

// Produto Interna
routes.get('/produto/:slug?', internalProductController.list);

module.exports = routes;