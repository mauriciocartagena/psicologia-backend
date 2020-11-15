const { response } = require('express');
const { Usuario } = require('../database/config');


const mostrarUsuario = async ( req, res = response ) => { 

    const usuario = await Usuario.findAll();
 
     res.status( 201 ).json({
         ok:true,
         msg: 'lista de usuarios',
         usuario
     });
};

const crearUsuario = async ( req, res = response ) => { 

   const usuario = await Usuario.create();

    res.status( 201 ).json({
        ok:true,
        msg: 'crear usuario',
        usuario
    });
};

const loginUsuario = ( req, res = response ) => {

    const { username, password } = ( req.body );

    res.json({
        ok:true,
        msg:'login',
        username,
        password
    });

};


module.exports = {
    mostrarUsuario,
    crearUsuario,
    loginUsuario,
}