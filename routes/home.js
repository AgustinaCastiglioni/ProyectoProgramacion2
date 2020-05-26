var express = require('express');
var router = express.Router();

var controller= require('../controllers/homeController')
router.get('/', controller.home)
router.get('/detalle', controller.detalle)
router.post('/nueva-resena', controller.chequearQueCoincidaMail)


module.exports = router;
