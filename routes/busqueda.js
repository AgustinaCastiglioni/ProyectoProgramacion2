var express = require('express');
var router = express.Router();

var controller= require('../controllers/busquedaController')
router.get('/', controller.buscar)

module.exports = router;
