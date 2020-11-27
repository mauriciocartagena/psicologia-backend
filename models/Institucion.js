const  { DataTypes } = require('sequelize');


const InstitucionModel = ( sequelize ) => {
    
    return sequelize.define('institucion',{
        id_institucion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: { 
            type: DataTypes.STRING(250),
            allowNull: false,
            
        },
        direccion: { 
            type: DataTypes.STRING(250),
            allowNull: false,
            
        },
        celular: { 
            type: DataTypes.STRING(20),
            allowNull: false,
            
        },
        telefono: { 
            type: DataTypes.STRING(50),
            allowNull: false,
            
        },
        imei: { 
            type: DataTypes.STRING(30),
            allowNull: false,
            
        },
        nit: { 
            type: DataTypes.STRING(20),
            allowNull: false,
            
        },
        nombre_contacto: { 
            type: DataTypes.STRING(50),
            allowNull: false,
            
        }
    });
};

module.exports = {
    InstitucionModel
}