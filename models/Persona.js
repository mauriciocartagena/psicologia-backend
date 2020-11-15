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
        dni: DataTypes.STRING,
        fecha_nacimiento: DataTypes.DATE,
        email: DataTypes.STRING  
    });
};

module.exports = {
    PersonaModel
}