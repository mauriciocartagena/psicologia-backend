const  { DataTypes } = require('sequelize');


const TestDisponiblesModel = ( sequelize ) => {
    
    return sequelize.define('test_disponibles',{
        id_test_disponible: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        fecha_inicio: DataTypes.DATE,
        fecha_fin:DataTypes.DATE,
        num_test_simple:DataTypes.INTEGER,
        num_test_formas: DataTypes.INTEGER
    });
};

module.exports = {
    TestDisponiblesModel
}