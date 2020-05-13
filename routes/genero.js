var express = require('express');
var router = express.Router();

var controller= require('../controllers/generoController')
router.get('/', controller.porGenero)

module.exports = router;
