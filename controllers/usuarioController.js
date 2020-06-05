let db = require ('../database/models/index');
let moduloLogin = require('../modulo-login');
const funciones={
    datosUsuario: function(req,res) {
        db.Usuario.findByPk(req.params.id)
        .then (resultado=> {
            console.log(resultado)
            res.render('detalleusuario',
            {
               datos: resultado,
               
            })
        })
    },
    logUser: function (req,res) {
        return res.render ('login', {tipo :"log"});
    
    },
    confirmUser: function (req,res) {
        //return res.send (req.body);
       moduloLogin.validar (req.body.email, req.body.password)
       .then (
          resultado => {
            if(resultado == undefined) {
               res.redirect ('/usuario/login'); // redirecciona al login
                } else {
                 res.redirect ('/usuario/login/' + resultado.id )
               }
            }
        )
    }
   // getReviews

}
module.exports= funciones;