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
                 res.redirect ('/usuario/resenas/' + resultado.id )
               }
            }
        )
    },
    getReviews: function (req,res) {
        db.Resena.findAll (
        {
            where: [
                {usuarios_id: req.params.id}
            ],
            include: ["usuarios"]
        })
        .then (resultado => 
            res.render ('resenas', {resultado:resultado})
            )
    }

}
module.exports= funciones;