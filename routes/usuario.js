var express = require('express');
var router = express.Router();

var controller= require('../controllers/usuarioController')
router.get('/login', controller.logUser);
router.post('/login', controller.confirmUser);
router.get ('/login/:id', controller.getReviews);
router.get('/:id', controller.datosUsuario);



module.exports = router;