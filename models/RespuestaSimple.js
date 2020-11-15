const { DataTypes } = require('sequelize');    

const RespuestaSimpleModel = ( sequelize ) => {

    return sequelize.define( 'respuesta_simple', {

        id_respuesta:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_hora: DataTypes.DATE,
        si: DataTypes.TINYINT,
        nose: DataTypes.TINYINT,
        no: DataTypes.TINYINT

    });
}

module.exports = {
    RespuestaSimpleModel
}