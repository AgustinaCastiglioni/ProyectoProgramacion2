var express = require('express');
var router = express.Router();

var controller= require('../controllers/homeController')
router.get('/', controller.home)
router.get('/detalle', controller.detalle)

module.exports = router;
