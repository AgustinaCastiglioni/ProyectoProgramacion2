let db = require('../database/models');
let op = db.Sequelize.Op;

let busquedaUsersController = {
    mostrarFormulario: function (req,res) {
        res.render('searchUsers')
    },

    //ESTE METODO ES CUANDO EL USUARIO ENVIE EL FORMULARIO
    searchUsers: function(req, res){
        db.Usuario.findAll({
            where: {
                [op.or]: {
                    email: {[op.like]: "%" + req.query.busquedaUsuarios + "%"},
                    nombreCompleto: {[op.like]: "%" + req.query.busquedaUsuarios + "%"}
                }
            }
            })
            .then(function(resultados){
                if(resultados.length != 0) {
                    res.render('searchUserResultados', {
                        resultados: resultados
                    })
                }
                else {
                    res.send("no se encontrarón resultados")
                }
            })
    }
}

module.exports = busquedaUsersController;