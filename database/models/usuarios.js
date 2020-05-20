module.exports = function(sequelize, dataTypes) {
    let alias = "usuarios";
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
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE 
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);

    usuarios.associate = function(models) {
        usuarios.hasMany(models.resenas, {
            as: "resenas",
            foreignKey: "usuarioId"
        });
    }
    return Usuario;

}