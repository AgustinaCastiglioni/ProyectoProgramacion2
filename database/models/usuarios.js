module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremente: true
        },
        nombreCompleto: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        generoFavorito: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE 
        }
    }

    let config = {
        tableName: "usuarios",
       
    }

    let Usuario = sequelize.define(alias, cols, config);

  // Usuario.associate = function(models) {
     //  Usuario.hasMany(models.Resena, {
    // as: "resenas",
     //  foreignKey: "usuarioId"
      // });
  // }
   
    return Usuario;

}