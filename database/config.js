const Sequelize = require("sequelize");

const { PersonaModel } = require('../models/Persona');
const { UsuarioModel } = require('../models/Usuario');


const { TestSimpleModel } = require('../models/TestSimple');
const { PreguntaSimpleModel } = require('../models/PreguntaSimple');
const { CategoriaModel } = require('../models/Categoria');
const { RespuestaSimpleModel } = require("../models/RespuestaSimple");

const { PreguntasFormasModel } = require('../models/PreguntasFormas');
const { TestFormasModel } = require('../models/TestFormas');
const { RespuestasFormasModel } = require("../models/RespuestasFormas");
const { TestDisponiblesModel } = require("../models/TestDisponibles");
const { InstitucionModel } = require("../models/Institucion");



const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER, 
    process.env.DB_PASSWORD,  {
        host        : process.env.DB_CNN,
        port        : process.env.DB_PORT,
        dialect     : process.env.DB_DIALECT,
        // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"   
    }
);

// persona-usuario
const Persona = PersonaModel( sequelize );
const Usuario = UsuarioModel( sequelize );

// pregunta simple - testSimple -Categoria

const TestSimple = TestSimpleModel( sequelize );
const Categoria = CategoriaModel( sequelize );
const PreguntaSimple = PreguntaSimpleModel( sequelize );
const RespuestaSimple = RespuestaSimpleModel( sequelize );

const PreguntasFormas = PreguntasFormasModel( sequelize );
const TestFormas = TestFormasModel( sequelize );
const RespuestasFormas = RespuestasFormasModel( sequelize );

const Institucion = InstitucionModel( sequelize );
const TestDisponibles = TestDisponiblesModel( sequelize );



//No es requerida
PreguntaSimple.belongsTo( Categoria ,{
    foreignKey:"id_categoria",
    as:"categorias",
});
PreguntaSimple.belongsTo( TestSimple, {
  foreignKey: "id_test",
  as: "test_simples",
});

RespuestaSimple.belongsTo( PreguntaSimple, {
    foreignKey: "id_pregunta",
    as: "pregunta_simples",
});
RespuestaSimple.belongsTo( Usuario , {
    foreignKey: "persona_id",
    as: "usuarios",
});

PreguntasFormas.belongsTo( TestFormas, { 
    foreignKey:"id_test",
    as:"test_formas"
});

RespuestasFormas.belongsTo( PreguntasFormas, { 
    foreignKey:"id_pregunta",
    as:"pregunta_formas"
});

RespuestasFormas.belongsTo( Usuario, { 
    foreignKey:"persona_id",
    as:"usuarios"
});

Usuario.belongsTo( Institucion, {
    foreignKey:"id_institucion",
    as:"institucions"
});

TestDisponibles.belongsTo( Usuario, {
    foreignKey:"persona_id",
    as:"usuarios"
});


// Es requerida
Persona.hasMany( Usuario, { 
    foreignKey: 'persona_id', 
    as: 'usuarios', 
    onDelete: 'CASCADE' 
});





sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

module.exports = {
    Persona,
    Usuario,
    TestSimple,
    Categoria,
    PreguntaSimple,
    RespuestaSimple,
    PreguntasFormas,
    TestFormas,
    RespuestasFormas,
    Institucion,
    TestDisponibles
}