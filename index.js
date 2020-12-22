const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

require('dotenv').config();
require('./database/config');

//Usar entornos de desarrollo

// console.log( process.env );


// crear el servidor de express
const app = express();

// Cors
app.use(cors());

//Directorio Público
app.use( express.static('public') );



//Lectura y parseo del body

app.use( express.json() );

app.use(bodyParser.urlencoded({
    limit: '5mb',
    parameterLimit: 100000,
    extended: false 
}));

app.use(bodyParser.json({
    limit: '5mb'
}));

//Rutas
app.use('/api/auth',              require('./routes/auth'));
app.use('/api/users',             require('./routes/users'));
 
app.use('/api/categoria',         require('./routes/categoria'));
app.use('/api/test-simple',       require('./routes/testSimple'));
app.use('/api/pregunta-simple',   require('./routes/preguntaSimple'));
app.use('/api/respuesta-simple',  require('./routes/respuestaSimple'));
app.use('/api/test-disponibles',  require('./routes/testDisponibles'));
app.use('/api/institutos',        require('./routes/institutos'));
app.use('/api/test-formas',       require('./routes/testFormas'));
app.use('/api/pregunta-formas',   require('./routes/preguntaFormas'));
app.use('/api/respuesta-formas',  require('./routes/respuestaFormas'));


//TODO CRUD : Eventos



// Escuchar peticiones 

app.listen( process.env.PORT, () => { 

    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);

});