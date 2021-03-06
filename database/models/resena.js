module.exports = function(sequelize, dataTypes) {
    let alias = "Resena";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremente: true
        },
        peliculaId: {
            type: dataTypes.STRING
        },
        usuarioId: {
            type: dataTypes.INTEGER
        },
        textoResena: {
            type: dataTypes.STRING
        },
        puntaje: {
            type: dataTypes.DECIMAL
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE 
        }
    }

    let config = {
        tableName: "resenas",
    }
    
    let Resena = sequelize.define(alias, cols, config);

    Resena.associate = function(models) {
       Resena.belongsTo(models.Usuario, {
            as: "usuarios",
          foreignKey: "usuarioId"
     });
    }
    return Resena;

}