module.exports = ( sequelize, type ) => {
    return sequelize.define('persona', { 

        id_persona: {
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: type.STRING,
        primer_apellido: type.STRING,
        segundo_apellido: type.STRING,
        email: type.STRING,
        dni: type.INTEGER,
        fecha_nacimiento: type.DATE

    });
}