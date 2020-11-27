const  { DataTypes } = require('sequelize');


const PersonaModel = ( sequelize ) => {
    
    return sequelize.define('persona',{
        persona_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        primer_apellido: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        segundo_apellido: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        celular: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        imei: { 
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        genero: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        padres_responsables: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        dni: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: true,
        }
    });
};

module.exports = {
    PersonaModel
}