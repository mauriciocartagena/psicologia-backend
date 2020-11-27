const { DataTypes } = require('sequelize');  

const UsuarioModel = ( sequelize ) => {

    const User =  sequelize.define('usuario', {

        persona_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        last_session: DataTypes.DATE

    });

    return User

};

module.exports = {
    UsuarioModel
}