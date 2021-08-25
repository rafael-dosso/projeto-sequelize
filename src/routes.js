const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');
const TechController = require('./controllers/TechController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:userId/adresses', AdressController.store);
routes.get('/users/:userId/adresses', AdressController.index);

routes.post('/users/:userId/techs', TechController.store);
routes.get('/users/:userId/techs', TechController.index);


module.exports = routes;