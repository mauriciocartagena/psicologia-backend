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
        pregunta: DataTypes.BLOB,
        op1:DataTypes.BLOB,
        op2:DataTypes.BLOB,
        op3:DataTypes.BLOB,
        op4:DataTypes.BLOB,
        op5:DataTypes.BLOB,
        op6:DataTypes.BLOB,
        respuesta_correcta: DataTypes.INTEGER,
    });
}

module.exports =  {
    PreguntasFormasModel
}