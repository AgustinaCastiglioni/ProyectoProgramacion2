var express = require('express');
var router = express.Router();

var controller= require('../controllers/resenasController')
router.get('/', controller.resenas)
router.post('/create', controller.resenas)

module.exports = router;