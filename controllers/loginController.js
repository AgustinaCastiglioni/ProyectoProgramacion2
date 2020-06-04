let db = require('../database/models/index');
let moduloLogin = require('../modulo-login');
const funciones = {
    logUser: function (req,res) {
        res.render ('login', {tipo :"log"})
    }
}
module.exports= funciones;