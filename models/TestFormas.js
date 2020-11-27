const { DataTypes } = require('sequelize');

const TestFormasModel = ( sequelize ) => {

    return sequelize.define( 'test_formas', {

        id_test:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    });
}

module.exports =  {
    TestFormasModel
}