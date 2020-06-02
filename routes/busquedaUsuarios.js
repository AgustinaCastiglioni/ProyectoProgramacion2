var express = require('express');
var router = express.Router();

var controller= require('../controllers/busquedaUsersController')
router.get('/', controller.mostrarFormulario)
router.get('/resultados', controller.searchUsers)

module.exports = router;