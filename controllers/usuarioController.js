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
               res.redirect ('/usuario/error/usuario');
                } else {
                 res.redirect ('/usuario/login/' + resultado.id )
               }
            })
        }
        else{
            res.redirect ('/usuario/error/usuario');
        }
    })
    },
    getReviews: function (req,res) {
            db.Resena.findAll({
                where: 
                {usuarioId: req.params.id},
            })
            .then(resultado => {
                console.log(resultado)
                res.render('resenas', {
                    resultado:resultado,
                })
            })
       
    },
    showEdit: function (req,res) {
        db.Resena.findOne({

           where: [
               {id: req.params.id}
            ]})
        .then(resultado=> {
            res.render('editReview',
            {resultado: resultado})
        })
         
    },

    confirmEdit: function (req,res) {
        moduloLogin.chequearUsuario(req.body.email)
        .then(resultado => {
            if (resultado) {
        moduloLogin.validar (req.body.email, req.body.password)
        .then (resultado=> {
            if (resultado) {
                db.Resena.update({
                       textoResena: req.body.resena,
                        puntaje: req.body.puntaje },
               { where: { id: req.params.id
                }
                
            })
                .then(resultado => {
                    console.log(resultado)
                    res.redirect('/home');
                        }
                    )}
                    
                    else {
                        res.redirect('/usuario/error/usuario');
            }
        })
    }
    else{
        res.redirect('/usuario/error/usuario');
    }
})
    
    },

    deleteReview: function (req,res) {
        res.render('deleteReview' , {tipo: 'delete' , deleteId: req.params.id})
    },
    confirmDelete: function (req,res) {
        moduloLogin.chequearUsuario(req.body.email)
        .then(resultado => {
            if (resultado) {
        moduloLogin.validar (req.body.email, req.body.password)
        .then (resultado=> {
            if (resultado) {
                db.Resena.destroy (
                    {
                        where: {
                            id: req.params.id, 
                        }
                    }
                )
                res.redirect('/home');
                
            } else {
                res.redirect('/usuario/error/usuario');
            }
        })
    }
    else{
        res.redirect('/usuario/error/usuario');
    }
    })
},
    errorUsuario: function(req,res){
        res.render('errorUsuario');
    },

}
module.exports= funciones;