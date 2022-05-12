const {Router} = require('express');
const routes = new Router();
const homeController = require('../controllers/home.controller');

// Página Inicial
routes.get('/', homeController.list);

module.exports = routes;