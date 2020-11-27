const { response } = require('express');
const bcryt = require('bcryptjs');
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

    
    const { username, email, dni, password } = req.body;
    
    const personaDni      =  await Persona.findOne({ 
        where:{ dni : dni }
    });
    const personaUsername =  await Usuario.findOne({ 
        where:{ username : username }
    });
    const PersonaEmail    =  await Persona.findOne({ 
        where:{ email : email }
    });

    
    try {
        
        
        if ( personaDni || personaUsername || PersonaEmail) {
            
            return res.status( 400 ).json({
                ok:false,
                msg:'El usuario ya existe'
            });
            
        }
        
        //Encryptar contraseña
        const { persona_id } =  await Persona.create( req.body );
        
        const salt = bcryt.genSaltSync();
        
        passwordEncryt = bcryt.hashSync( password, salt );
        

        await Usuario.create( { 
            persona_id, 
            username,
            password:passwordEncryt 
        });
    
        res.status( 201 ).json({
            ok:true,
            msg: 'register',
        });
        
    } catch (error) {
        console.log(error);
        res.status(201).json({
            ok:true,
            msg:'Por favor hable con el Administrador',
        });
    }
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
const modificarUser = async ( req, res = response ) => { 

    await Usuario.update( req.body ,{
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
    modificarUser,
    DeleteUsuario
}