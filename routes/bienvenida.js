var express = require('express');
var router = express.Router();

var controller= require('../controllers/bienvenidaController')
router.get('/', controller.bienvenida)

module.exports = router;
