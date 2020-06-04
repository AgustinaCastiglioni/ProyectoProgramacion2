var express = require('express');
var router = express.Router();

var controller= require('../controllers/loginController')
router.get('/:id', controller.moduloLogin);



module.exports = router;