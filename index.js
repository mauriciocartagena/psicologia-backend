const express = require('express');

// crear el servidor de express

const app = express();

//Rutas

app.get('/', ( req, res ) => { 

    res.json({
        ok:true
    })

});

// Escuchar peticiones 

app.listen( 5000, () => { 

    console.log(`Servidor corriendo en el puerto ${ 5000 }`);

});