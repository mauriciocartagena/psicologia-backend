const { DataTypes } = require('sequelize');  

const UsuarioModel = ( sequelize ) => {

    const User =  sequelize.define('usuario', {

        persona_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        last_session: DataTypes.DATE

    });

    return User

};

module.exports = {
    UsuarioModel
}