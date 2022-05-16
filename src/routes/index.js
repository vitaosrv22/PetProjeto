const {Router} = require('express');
const routes = new Router();
const homeController = require('../controllers/home.controller');
const formController = require('../controllers/form.controller');

// Página Inicial
routes.get('/', homeController.list);

// Formulário
routes.get('/formulario', formController.list);

module.exports = routes;