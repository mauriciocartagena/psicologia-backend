const { response } = require('express');
const { Usuario } = require('../database/config');
const { Persona } = require('../database/config');

const verUsuario = async ( req, res = response ) => { 

    const persona =  await Persona.findAll({
        include: [
            { model: Usuario, as: 'usuarios',
              attributes:['username','last_session','createdAt','updatedAt','id_institucion']
            }
        ]
    });

    res.status( 201 ).json({
        ok:true,
        msg: 'lista de usuarios',
        personas:  persona
    });
};

const crearUsuario = async ( req, res = response ) => { 

    const { persona_id } =  await Persona.create( req.body );

    const { username, password } = req.body;
    //TODO Falta la institución
    await Usuario.create( { 
        persona_id, 
        username,
        password 
    });

    res.status( 201 ).json({
        ok:true,
        msg: 'register',
    });
};
const modificarUsuario = async ( req, res = response ) => { 

    await Persona.update( req.body ,{
        where:{ persona_id: req.body.persona_id }
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
        where: { persona_id: req.body.persona_id }
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