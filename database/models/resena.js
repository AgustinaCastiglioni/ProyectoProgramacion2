module.exports = function(sequelize, dataTypes) {
    let alias = "resenas";
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
        timestamps: false
    }
    
    let Resena = sequelize.define(alias, cols, config);

    resenas.associate = function(models) {
        resenas.belongsTo(models.usuarios, {
            as: "usuarios",
            foreignKey: "usuarioId"
        });
    }
    return Resena;

}