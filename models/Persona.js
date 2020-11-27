const  { DataTypes } = require('sequelize');


const PersonaModel = ( sequelize ) => {
    
    return sequelize.define('persona',{
        persona_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: DataTypes.STRING,
        primer_apellido: DataTypes.STRING,
        segundo_apellido: DataTypes.STRING,
        celular:DataTypes.STRING,
        imei:DataTypes.STRING,
        genero:DataTypes.STRING,
        edad:DataTypes.INTEGER,
        direccion:DataTypes.STRING,
        padres_responsables:DataTypes.STRING,
        dni: DataTypes.STRING,
        fecha_nacimiento: DataTypes.DATE,
        email: DataTypes.STRING  
    });
};

module.exports = {
    PersonaModel
}