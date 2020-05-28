let db = require ('../database/models/index');
const bcrypt = require('bcryptjs');

const funciones={
    registracion : function(req,res){
        res.render('registracion');
    },
    crear: function(req,res){

    },
    
    guardar: function(req,res) {
        let passEncriptada = bcrypt.hashSync(req.body.password, 10) ;
    
        db.Usuario.create ({
            nombreCompleto: req.body.nombre ,
            email:req.body.email ,
            password: passEncriptada  ,
            fechaNacimiento: req.body.Birthday  ,
            gemero_id: req.body.genero ,
            createAt: new Date().toISOString().slice(0, 19).replace('T', ' '),

        })
        .then (function (registracionController){
            res.redirect('/registracion'); 
        })

    },
    listado: function(req,res) {
        db.Usuario.findAll()
        .then (function (registracionController){
            res.render('registracion',{usuarios:usuarios})
        })
    }
    
    }
  

    module.exports= funciones;
   