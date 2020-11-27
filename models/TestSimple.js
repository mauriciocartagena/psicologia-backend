const { DataTypes } =  require('sequelize');

const TestSimpleModel = ( sequelize ) => {

    return sequelize.define( 'test_simple', {

        id_test: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_test: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

    });

}

module.exports = {
    TestSimpleModel
}