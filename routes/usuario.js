var express = require('express');
var router = express.Router();

var controller= require('../controllers/usuarioController')
router.get('/login', controller.logUser); // form de logueo
router.post('/login', controller.confirmUser); //procesa loguea y redirecciona a MIS RESEÑAS
router.get ('/login/:id', controller.getReviews); //LISTADO DE MIS RESENAS
router.get('/resenas/editReview/:id', controller.showEdit);// form para editar
router.post('/resenas/editReview/:id', controller.confirmEdit); // procesa la edicion de la resena
router.get('/resenas/deleteReview/:id', controller.deleteReview);
router.post('/resenas/deleteReview/:id', controller.confirmDelete);
router.get('/:id', controller.datosUsuario);



module.exports = router;