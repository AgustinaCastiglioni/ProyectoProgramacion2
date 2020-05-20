var express = require('express');
var router = express.Router();

var controller= require('../controllers/reseñasController')
router.get('/misreseñas', controller.reseñas)


module.exports = router;
