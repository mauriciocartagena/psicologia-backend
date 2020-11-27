const { DataTypes } = require('sequelize');

const PreguntaSimpleModel = ( sequelize ) => {

    return sequelize.define( 'pregunta_simple', {

        id_pregunta:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pregunta: DataTypes.TEXT,
    });
}

module.exports =  {
    PreguntaSimpleModel
}