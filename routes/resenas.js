var express = require('express');
var router = express.Router();

var controller= require('../controllers/resenasController')
router.get('/', controller.resenas)

module.exports = router;