const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController.js');


router.get('/',mainController.homePage);
router.get('/filter/:type',mainController.pokeFilter);
router.get('/types',mainController.pokeTypes);
router.get('/details/:id',mainController.pokePage);

module.exports = router;