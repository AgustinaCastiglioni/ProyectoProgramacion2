let db = require ('../database/models/index');
const funciones={
    registracion : function(req,res){
        res.render('registracion');
    },
    crear: function(req,res){

    },
    guardar: function(req,res) {
        db.Usuario.create ({
            nombreCompleto: req.body.nombre ,
            email:req.body.email ,
            password: req.body.password  ,
            fechaNacimiento: req.body.Birthday  ,
            createAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
         //   movieid: req.query.idmovie


        })
        .then (function (registracionController){
            res.redirect('/registracion'); 
        })

    },
    listado: function(req,res) {
        db.Usuario.FindAll()
        .then (function (registracionController){
            res.render('registracion',{usuarios:usuarios})
        })
    }
    
    }
    module.exports= funciones;