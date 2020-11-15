const { DataTypes } = require('sequelize');

const RespuestasFormasModel = ( sequelize ) => {

    return sequelize.define( 'respuestas_formas', {

        id_respuesta:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_hora:DataTypes.DATE,
        bien_mal:DataTypes.TINYINT,
    });
}

module.exports =  {
    RespuestasFormasModel
}