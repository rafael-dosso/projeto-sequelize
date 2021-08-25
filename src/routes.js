const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:userId/adresses', AdressController.store);
routes.get('/users/:userId/adresses', AdressController.index);

module.exports = routes;