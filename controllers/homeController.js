let db = require ('../database/models/index');
let moduloLogin= require('../modulo-login')
const funciones={
home: function(req,res){
    res.render('home');
},
mandarInfo: function(req,res){

   db.Resena.create({
       
        peliculaId:   req.query.idmovie, 
      textoResena: req.body.resenanueva,
      puntaje: req.body.puntajecito,
     

      usuarioId: 2,
 })
  
    .then (function (homeController){
        
    res.redirect('/home/detalle/?idmovie=' + req.query.idmovie)
   })
},

detalle: function(req,res){
    db.Resena.findAll({
        where: {
            peliculaId: req.query.idmovie 

        },
        include: [ {association: 'usuarios'}]
    })
    .then(resultados=>{
       
       res.render('detalle', {
            idmovie: req.query.idmovie,
            resenas: resultados,
           

       })
    })
   
},
chequearQueCoincidaMail: function(req,res){
    moduloLogin.chequearUsuario(req.body.mailderesena)
.then( resultado => {
    if(resultado != undefined ){
        res.send(resultado)     
    }
     else{
       
         res.send('No existe el usuario con ese mail')
     }
})
console.log(resultado)
}

}

module.exports= funciones;