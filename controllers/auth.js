const { response } = require('express');
const { Persona } = require('../database/config');

const verUsuario = async ( req, res = response ) => { 

   const persona = await Persona.findAll();

    res.status( 201 ).json({
        ok:true,
        msg: 'lista de usuarios',
        personas:persona
    });
};

const crearUsuario = async ( req, res = response ) => { 

    await Persona.create( req.body );

    res.status( 201 ).json({
        ok:true,
        msg: 'register',
    });
};
const modificarUsuario = async ( req, res = response ) => { 

    await Persona.update( req.body ,{
        where:{ id: req.params.personId }
    }).then( ()=> { 
        res.status( 200 ).json({
            ok:true,
            msg: 'update',
        });
    }).catch(()=> {
        res.status( 400 ).json({
            ok:true,
            msg: 'error update',
        });
    });
   
};

const DeleteUsuario = async ( req, res = response ) => { 

    await Persona.destroy({
        where: { id: req.params.personId }
    });

    res.status( 201 ).json({
        ok:true,
        msg: 'Eliminar',
    });
};

const loginUsuario = ( req, res = response ) => {

    const { email, password } = ( req.body );

    res.json({
        ok:true,
        msg:'login',
        email,
        password
    });

};

const revalidarToken = ( req, res ) => { 

    res.json({
        ok:true,
        msg: 'renew'
    })
};


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    crearUsuario,
    verUsuario,
    modificarUsuario,
    DeleteUsuario
}