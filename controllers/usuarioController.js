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
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                if (resultado) { 
       moduloLogin.validar (req.body.email, req.body.password)
       .then (resultado => {
            if(resultado == false) {
               res.redirect ('/usuario/login'); // redirecciona al login
                } else {
                 res.redirect ('/usuario/login/' + resultado.id )
               }
            })
        }
        else{
            res.redirect ('/usuario/login');
        }
    })
    },
    getReviews: function (req,res) {
        db.Resena.findAll({ 
     where: 
          {usuarioId: req.params.id},
         
         include: [{
            association: 'usuarios'
        }]
        })
        .then(resultado => {
            res.render('resenas', {
                resultado:resultado,
            })
        })
      
       
    },
    showEdit: function (req,res) {
        db.Resena.findByPk(req.params.id)
        .then(resultado=> {
            res.render('editReview',
            {
               resultado: resultado,
               
            })
        })
         
    },

    confirmEdit: function (req,res) {
        moduloLogin.validar (req.body.email, req.body.password)
        .then (resultado=> {
            if (resultado == false) {
                db.Resena.update (
                    {
                        where: {
                            id: req.params.id, 
                        }
                    }
                )
                .then(resultado => {
                            res.redirect ('/usuario/resenas/' + resultado.id);
                        }
                    )}
                    
                    else {
                res.redirect ('usuario/resenas/editReview/'+ req.params.id);
            }
        })
    },

    deleteReview: function (req,res) {
        res.render('login' , {tipo: 'delete' , deleteId: req.params.id})
    },
    confirmDelete: function (req,res) {
        moduloLogin.validar (req.body.email, req.body.password)
        .then (resultado=> {
            if (resultado != null) {
                db.Resena.destroy (
                    {
                        where: {
                            id: req.params.id, 
                        }
                    }
                )
                res.redirect('/usuario/resenas/');
            } else {
                res.redirect ('usuario/resenas/deleteReview/'+ req.params.id)
            }
        })
    }

}
module.exports= funciones;