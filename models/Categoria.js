const { DataTypes } = require('sequelize');    

const CategoriaModel = ( sequelize ) => {

    return sequelize.define( 'categoria', {

        id_categoria:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_categoria: {
            type : DataTypes.STRING(20),
            allowNull: false,
        }

    });
}

module.exports = {
    CategoriaModel
}