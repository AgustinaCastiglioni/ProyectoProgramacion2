var express = require('express');
var router = express.Router();

var controller= require('../controllers/resenasController')
router.get('/', controller.resenas)
router.get('/peorespuntuadas', controller.peoresPuntuadas)
router.get('/mejorespuntuadas', controller.mejoresPuntuadas)
router.get('/masrecientes', controller.masRecientes)


module.exports = router;