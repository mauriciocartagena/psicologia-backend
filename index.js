const express = require('express');
require('dotenv').config();
require('./database/config');

//Usar entornos de desarrollo

// console.log( process.env );


// crear el servidor de express


const app = express();

//BASE DE DATOS



//Directorio Público
app.use( express.static('public') );

//Lectura y parseo del body

app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/categoria', require('./routes/categoria'));
app.use('/api/users', require('./routes/users'));

//TODO CRUD : Eventos



// Escuchar peticiones 

app.listen( process.env.PORT, () => { 

    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);

});