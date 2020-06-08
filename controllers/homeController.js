let db = require('../database/models/index');
let moduloLogin = require('../modulo-login');

const funciones = {
    home: function (req, res) {
        res.render('home');
    },
    chequearQueCoincidaMail: function (req, res) {
        moduloLogin.chequearUsuario(req.body.mailderesena)
            .then(resultado => {
                if (resultado) {
                    moduloLogin.validar(req.body.mailderesena, req.body.passwordderesena)
                    .then(resultado => {
                       if(resultado == false){
                        res.redirect('/usuario/error/usuario')   
                        
                       } 
                       else{
                          
                        db.Resena.create({
                            peliculaId: req.query.idmovie,
                            textoResena: req.body.resenanueva,
                            puntaje: req.body.puntajecito,
                            usuarioId: resultado.id,
                        })

                        res.redirect('/home/detalle/?idmovie=' + req.query.idmovie)
                    }
                })
                    }

                else {
                   
                    res.redirect('/usuario/error/usuario')
                }
            })
    },

    detalle: function (req, res) {
        db.Resena.findAll({
                where: {
                    peliculaId: req.query.idmovie

                },
                include: [{
                    association: 'usuarios'
                }]
            })
            .then(resultados => {

                res.render('detalle', {
                    idmovie: req.query.idmovie,
                    resenas: resultados,


                })
            })

    }


}

module.exports = funciones;