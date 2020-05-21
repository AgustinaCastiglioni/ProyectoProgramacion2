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
       // let check = bcrypt.compareSync ('req.body.password', passEncriptada);
       // console.log(check); // true
    
        db.Usuario.create ({
            nombreCompleto: req.body.nombre ,
            email:req.body.email ,
            password: passEncriptada  ,
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
   