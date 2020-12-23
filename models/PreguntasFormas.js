const { DataTypes } = require('sequelize');

const PreguntasFormasModel = ( sequelize ) => {

    return sequelize.define( 'pregunta_formas', {

        id_pregunta:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        pregunta: DataTypes.BLOB('long'),
        op1:DataTypes.BLOB('long'),
        op2:DataTypes.BLOB('long'),
        op3:DataTypes.BLOB('long'),
        op4:DataTypes.BLOB('long'),
        op5:DataTypes.BLOB('long'),
        op6:DataTypes.BLOB('long'),
        respuesta_correcta: DataTypes.INTEGER,
    });
}

module.exports =  {
    PreguntasFormasModel
}