const  { DataTypes } = require('sequelize');


const InstitucionModel = ( sequelize ) => {
    
    return sequelize.define('institucion',{
        id_institucion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
        celular: DataTypes.INTEGER,
        telefono: DataTypes.STRING,
        imei: DataTypes.STRING,
        nit: DataTypes.STRING,
        nombre_contacto: DataTypes.STRING
    });
};

module.exports = {
    InstitucionModel
}