let db = require ('../database/models/index');
const funciones={
    resenas: function(req,res){
        res.render('resenas');
    },
    mejoresPuntuadas:function(req,res){
        db.Resena.findAll({  
            order:  [['puntaje', 'DESC']
           

            ],
    })
        .then (resultado=>{
            console.log(resultado)
            res.render('mejoresresenas',{
                resenas:resultado,
                
            })
        })
    },
    peoresPuntuadas:function(req,res){
        db.Resena.findAll({  
            order:  [['puntaje', 'ASC']
           

            ],
    })
        .then (resultado=>{
            console.log(resultado)
            res.render('peorespuntuadas',{
                resenas:resultado,
                
            })
        })
    },
    masRecientes:function(req,res){
        db.Resena.findAll({  
            order:  [['createdAt', 'DESC']
           

            ],
    })
        .then (resultado=>{
            console.log(resultado)
            res.render('masrecientes',{
                resenas:resultado,
                
            })
        })
    }
    }
    module.exports= funciones;
   
        
